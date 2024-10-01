import React, { useState, useEffect } from 'react';
import Split from 'react-split';
import MonacoEditor from 'react-monaco-editor';
import '../assets/css/Editor.css';
import { configureMonaco } from "./configureMonaco";
import { FaPlay, FaTrashAlt, FaArrowLeft, FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../assets/css/markdown.css';
import mo from 'motoko/interpreter';

const BrowserEditor = ({ selectedLesson: initialSelectedLesson, onLessonChange, pageType }) => {
    const [jsonPath, setJsonPath] = useState('');
    const [selectedLesson, setSelectedLesson] = useState(initialSelectedLesson);
    const [lessonContent, setLessonContent] = useState('');
    const [solutionContent, setSolutionContent] = useState('');
    const [lessonPath, setLessonPath] = useState('');
    const [courseData, setCourseData] = useState([]);
    const [code, setCode] = useState('// Motoko kodu buraya gelecek...');
    const [activeTab, setActiveTab] = useState('main.mo');
    const [showSolution, setShowSolution] = useState(false);

    useEffect(() => {
        // Web worker yapılandırmasını yap
        window.MonacoEnvironment = {
            getWorkerUrl: function (workerId, label) {
                if (label === 'json') {
                    return '/monacoWorker.js';
                }
                return '/monacoWorker.js'; // Diğer diller için de aynı worker'ı kullanabilirsiniz
            }
        };
    }, []);

    useEffect(() => {
        if (pageType === 'practice') {
            setJsonPath('/content/course.json');
        } else {
            setJsonPath('/challenges/challenges.json');
        }
    }, [pageType]);

    useEffect(() => {
        fetch(jsonPath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // JSON olarak döndür
            })
            .then((data) => {
                setCourseData(data.lessons);
                if (!initialSelectedLesson && data.lessons.length > 0) {
                    const firstLessonSlug = data.lessons[0]?.children[0]?.slug;
                    if (firstLessonSlug) {
                        setSelectedLesson(firstLessonSlug);
                        if (typeof onLessonChange === 'function') {
                            onLessonChange(firstLessonSlug);
                        }
                    }
                }
            })
            .catch((err) => console.error('Error loading course data:', err));
    }, [initialSelectedLesson, onLessonChange, jsonPath]);
    


    useEffect(() => {
        if (courseData.length > 0 && selectedLesson) {
            const findContentPath = (lessons) => {
                for (let section of lessons) {
                    for (let child of section.children) {
                        if (child.slug === selectedLesson) {
                            return child;
                        }
                    }
                }
                return null;
            };

            const lessonData = findContentPath(courseData);
            if (lessonData) {
                setLessonPath(lessonData.content);
                if (lessonData.files && lessonData.files.length > 0) {
                    fetch(`${pageType === 'practice' ? '/content/' : '/challenges/'}${lessonData.files[0]}`)
                        .then(response => response.text())
                        .then(data => setCode(data))
                        .catch(err => console.error('Error loading main.mo:', err));
                }
            }
        }
    }, [selectedLesson, courseData, pageType]);

    useEffect(() => {
        if (lessonPath) {
            fetch(`${pageType === 'practice' ? '/content/' : '/challenges/'}${lessonPath}`)
                .then(response => response.text())
                .then(data => {
                    const contentWithTitle = `\n\n${data}`;
                    setLessonContent(contentWithTitle);
                })
                .catch(err => console.error('Error loading lesson.md:', err));
        }
    }, [lessonPath, pageType]);


    useEffect(() => {
        configureMonaco();
    }, []);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const onChange = (newValue) => {
        setCode(newValue);
    };

    const handleRun = async () => {
        try {
            await mo.clearPackages();
            await mo.installPackages({ base: 'dfinity/motoko-base/master/src' });
            const codeToRun = code;
            mo.write('Main.mo', codeToRun);
            const result = await mo.run('Main.mo');
            if (result.result.error) {
                document.querySelector('.output').innerHTML = `<pre style="color: red;">Hata: ${result.result.error}</pre>`;
            } else if (result.stdout) {
                document.querySelector('.output').innerHTML = `<pre>${result.stdout}</pre>`;
            } else {
                document.querySelector('.output').innerHTML = `<pre></pre>`;
            }
        } catch (error) {
            document.querySelector('.output').innerHTML = `<pre style="color: red;">Error: ${error.message}</pre>`;
        }
    };



    const handleClear = () => {
        setCode('');
    };

    const findLessonIndex = (lessons, slug) => {
        for (let section of lessons) {
            for (let [index, child] of section.children.entries()) {
                if (child.slug === slug) {
                    return { section, index };
                }
            }
        }
        return { section: null, index: -1 };
    };
    useEffect(() => {
        setSolutionContent('');
        setShowSolution(false);
    }, [selectedLesson]);
    const handlePrevious = () => {
        if (courseData.length > 0 && selectedLesson) {
            const { section, index } = findLessonIndex(courseData, selectedLesson);
            if (section && index > 0) {
                const previousLessonSlug = section.children[index - 1].slug;
                setSelectedLesson(previousLessonSlug);
                if (typeof onLessonChange === 'function') {
                    onLessonChange(previousLessonSlug);
                }
            } else if (section && index === 0) {
                const currentSectionIndex = courseData.indexOf(section);
                if (currentSectionIndex > 0) {
                    const previousSection = courseData[currentSectionIndex - 1];
                    const previousLessonSlug = previousSection.children[previousSection.children.length - 1].slug;
                    setSelectedLesson(previousLessonSlug);
                    if (typeof onLessonChange === 'function') {
                        onLessonChange(previousLessonSlug);
                    }
                }
            }
        }
    };

    const handleNext = () => {
        if (courseData.length > 0 && selectedLesson) {
            const { section, index } = findLessonIndex(courseData, selectedLesson);
            if (section && index < section.children.length - 1) {
                const nextLessonSlug = section.children[index + 1].slug;
                setSelectedLesson(nextLessonSlug);
                if (typeof onLessonChange === 'function') {
                    onLessonChange(nextLessonSlug);
                }
            } else {
                const currentSectionIndex = courseData.indexOf(section);
                if (currentSectionIndex < courseData.length - 1) {
                    const nextSection = courseData[currentSectionIndex + 1];
                    const nextLessonSlug = nextSection.children[0].slug;
                    setSelectedLesson(nextLessonSlug);
                    if (typeof onLessonChange === 'function') {
                        onLessonChange(nextLessonSlug);
                    }
                }
            }
        }
    };

    const handleShowSolution = () => {
        setShowSolution(!showSolution);
        if (lessonPath) {
            const solutionPath = lessonPath.replace('lesson.md', 'solution.md');
            fetch(`${pageType === 'practice' ? '/content/' : '/challenges/'}${solutionPath}`)
                .then(response => response.text())
                .then(data => setSolutionContent(data))
                .catch(() => setSolutionContent('')) // Çözüm bulunamazsa boş göster
        }
    };



    const handleLessonSelect = (event) => {
        const selectedSlug = event.target.value;
        setSelectedLesson(selectedSlug);
        if (typeof onLessonChange === 'function') {
            onLessonChange(selectedSlug);
        }
    };

    const editorOptions = {
        selectOnLineNumbers: true,
        automaticLayout: true,
    };

    return (
        <div className="split-container rounded-md mt-2">
            <Split
                className='split-content'
                gutterSize={3}
                gutterAlign="center"
                direction="horizontal"
                cursor="col-resize"
            >
                <div className="content custom-scrollbar">
                    <div className="my-4">
                        <select
                            id="lessonSelect"
                            value={selectedLesson !== null ? selectedLesson : ""}
                            onChange={handleLessonSelect}
                            className="w-full h-12 bg-[#1e1e36] custom-scrollbar text-[#b3d4f9] text-xl border rounded-lg"
                        >
                            {courseData.map((section) => (
                                <optgroup label={section.name} key={section.name}>
                                    {section.children.map((lesson) => (
                                        <option value={lesson.slug} key={lesson.slug}>
                                            {lesson.name}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>
                    <hr className='text-gray'></hr>
                    <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]}>
                        {lessonContent}
                    </ReactMarkdown>
                    <div className='flex justify-between mr-5'>
                        <button
                            onClick={handleShowSolution}
                            className="w-36 mt-4 p-2 text-white rounded-lg bg-gradient-to-r from-purple-400 to-gray-100 shadow-lg transform hover:scale-105 transition-transform flex items-center justify-between"
                        >
                            {showSolution ? 'Hide Solution' : 'Show Solution'}
                            {showSolution ? <FaEyeSlash className="ml-2" /> : <FaEye className="ml-2" />}
                        </button>
                    </div>

                    {showSolution && (
                        <div className="mt-4 bg-gray-100 rounded-lg shadow">
                            <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]}>
                                {solutionContent}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>

                <Split
                    expandToMin={true}
                    direction="vertical"
                    gutterSize={3}
                    gutterAlign="center"
                >
                    <div className="editor">
                        <div className="flex justify-between items-center">
                            <div
                                className={`tab ${activeTab === 'main.mo' ? 'active' : ''} bg-[#2e2e50] w-24 h-10 text-[#b3d4f9] text-center flex items-center justify-center border-b-4 border-[#b3d4f9] hover:border-[#fff]`}
                                onClick={() => handleTabClick('main.mo')}
                            >
                                main.mo
                            </div>

                            <div className="controls flex space-x-4 mr-2">
                                <button onClick={handleRun} className="p-2 rounded-full bg-[#15803d] hover:bg-[#22c55e]">
                                    <FaPlay />
                                </button>
                                <button onClick={handleClear} className="p-2 rounded-full bg-[#0e7490] hover:bg-[#06b6d4]">
                                    <FaTrashAlt />
                                </button>
                                <button onClick={handlePrevious} className="p-2 rounded-full bg-[#2e2e50] text-[#b3d4f9] hover:bg-[#4c4c7a]">
                                    <FaArrowLeft />
                                </button>
                                <button onClick={handleNext} className="p-2 rounded-full bg-[#2e2e50] text-[#b3d4f9] hover:bg-[#4c4c7a]">
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                        <div className="tab-content">
                            <MonacoEditor
                                height="100%"
                                language="motoko"
                                value={code}
                                theme="custom-theme"
                                options={editorOptions}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="output">
                        <div className="bg-[#2e2e50] text-[#b3d4f9] p-2 rounded-md">
                            Output
                        </div>
                    </div>
                </Split>
            </Split>
        </div>
    );
};

export default BrowserEditor;
