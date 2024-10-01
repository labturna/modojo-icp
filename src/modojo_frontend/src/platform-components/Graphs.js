import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS bileşenlerini kaydedelim
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartComponent = () => {
  // Haftalık veriler
  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Son 7 gün
    datasets: [
      {
        label: 'Weekly Users',
        data: [120, 150, 180, 170, 220, 240, 200], // Örnek veri
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4, // Hatların kıvrımlı olması için
      },
    ],
  };

  // Aylık veriler
  const monthlyData = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ], // Son 12 ay
    datasets: [
      {
        label: 'Monthly Users',
        data: [1000, 1200, 900, 1400, 1500, 1700, 1600, 1800, 1900, 2100, 2300, 2500], // Örnek veri
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        tension: 0.4,
      },
    ],
  };

  // Chart konfigürasyonları
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#ffffff', // Legend text rengini beyaz yapıyoruz
        },
      },
      title: {
        display: true,
        text: 'User Statistics',
        color: '#ffffff', // Başlık rengini beyaz yapıyoruz
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff', // X ekseni yazı rengi
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // X ekseni grid çizgisi
        },
      },
      y: {
        ticks: {
          color: '#ffffff', // Y ekseni yazı rengi
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Y ekseni grid çizgisi
        },
        beginAtZero: true,
      },
    },
    layout: {
      padding: 20, // Grafik kenarlarına boşluk ekliyoruz
    },
    // Arka plan rengi
    backgroundColor: '#1e1e36',
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
      {/* Haftalık kullanıcı grafiği */}
      <div className="bg-[#1e1e36] p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-white mb-4">Weekly Users</h2>
        <Line data={weeklyData} options={options} />
      </div>

      {/* Aylık kullanıcı grafiği */}
      <div className="bg-[#1e1e36] p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-white mb-4">Monthly Users</h2>
        <Line data={monthlyData} options={options} />
      </div>
    </div>
  );
};

export default LineChartComponent;
