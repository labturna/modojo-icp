import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import BreadcrumbCard from './Breadcrumb';
import Footer from '../components/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../assets/css/markdown.css';
import LoadingScreen from './LoadingScreen';


const filesWithSlugs = [
    { name: 'overview.md', slug: 'overview' },
    { name: 'why_motoko.md', slug: 'why motoko' },
    { name: 'motivation_and_goals.md', slug: 'motivation and goals' },
    { name: 'Array.md', slug: 'Array' },
    { name: 'AssocList.md', slug: 'Assoc List' },
    { name: 'Blob.md', slug: 'Blob' },
    { name: 'Bool.md', slug: 'Bool' },
    { name: 'Buffer.md', slug: 'Buffer' },
    { name: 'CertifiedData.md', slug: 'Certified Data' },
    { name: 'Char.md', slug: 'Char' },
    { name: 'Debug.md', slug: 'Debug' },
    { name: 'Deque.md', slug: 'Deque' },
    { name: 'Error.md', slug: 'Error' },
    { name: 'ExperimentalCycles.md', slug: 'Experimental Cycles' },
    { name: 'ExperimentalInternetComputer.md', slug: 'Experimental Internet Computer' },
    { name: 'ExperimentalStableMemory.md', slug: 'Experimental Stable Memory' },
    { name: 'Float.md', slug: 'Float' },
    { name: 'Func.md', slug: 'Func' },
    { name: 'Hash.md', slug: 'Hash' },
    { name: 'HashMap.md', slug: 'Hash Map' },
    { name: 'Heap.md', slug: 'Heap' },
    { name: 'Int.md', slug: 'Int' },
    { name: 'Int16.md', slug: 'Int16' },
    { name: 'Int32.md', slug: 'Int32' },
    { name: 'Int64.md', slug: 'Int64' },
    { name: 'Int8.md', slug: 'Int8' },
    { name: 'Iter.md', slug: 'Iter' },
    { name: 'IterType.md', slug: 'Iter Type' },
    { name: 'List.md', slug: 'List' },
    { name: 'Nat.md', slug: 'Nat' },
    { name: 'Nat16.md', slug: 'Nat16' },
    { name: 'Nat32.md', slug: 'Nat32' },
    { name: 'Nat64.md', slug: 'Nat64' },
    { name: 'Nat8.md', slug: 'Nat8' },
    { name: 'None.md', slug: 'None' },
    { name: 'Option.md', slug: 'Option' },
    { name: 'Order.md', slug: 'Order' },
    { name: 'Prelude.md', slug: 'Prelude' },
    { name: 'Principal.md', slug: 'Principal' },
    { name: 'Random.md', slug: 'Random' },
    { name: 'RBTree.md', slug: 'RBTree' },
    { name: 'Region.md', slug: 'Region' },
    { name: 'Result.md', slug: 'Result' },
    { name: 'Stack.md', slug: 'Stack' },
    { name: 'Text.md', slug: 'Text' },
    { name: 'Time.md', slug: 'Time' },
    { name: 'Timer.md', slug: 'Timer' },
    { name: 'Trie.md', slug: 'Trie' },
    { name: 'TrieMap.md', slug: 'Trie Map' },
    { name: 'TrieSet.md', slug: 'Trie Set' },
];

const Overview = () => {
    const [selectedFile, setSelectedFile] = useState('overview');
    const [markdownContent, setMarkdownContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const file = filesWithSlugs.find(f => f.slug === selectedFile);
                if (file) {
                    const response = await fetch(`/documentation/${file.name}`);
                    const text = await response.text();
                    setMarkdownContent(text);
                }
            } catch (error) {
                console.error('Error fetching markdown file:', error);
            }
        };

        fetchMarkdown();
    }, [selectedFile]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <div className="flex flex-row sm:flex-row">
            <Sidebar className="w-full md:w-1/4" />
            <main className="flex-1 p-6">
                <BreadcrumbCard
                    items={[{ label: 'Home', href: '/overview' }, { label: 'Overview', href: '#' }]}
                    page={"overview"}
                    onSelect={(slug) => setSelectedFile(slug)}
                />
                <div className="bg-[#1e1e36] my-8 p-6 bg-gray-800 text-white rounded-lg shadow-md">
                    <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]}>
                        {markdownContent}
                    </ReactMarkdown>
                </div>
                <div className="sticky top-full">
                    <Footer />
                </div>
            </main>
        </div>

    );
}

export default Overview;
