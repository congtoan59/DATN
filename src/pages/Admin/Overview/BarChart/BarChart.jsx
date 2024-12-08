// src/components/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Đăng ký các thành phần cho Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const BarChart = () => {
    // Dữ liệu cho biểu đồ
    const data = {
        labels: [
            'Tháng 1',
            'Tháng 2',
            'Tháng 3',
            'Tháng 4',
            'Tháng 5',
            'Tháng 6',
            'Tháng 7',
            'Tháng 8',
            'Tháng 9',
            'Tháng 10',
            'Tháng 11',
            'Tháng 12',
        ],
        datasets: [
            {
                label: 'Doanh thu (Triệu VNĐ)',
                data: [12, 19, 3, 5, 2, 3, 5, 6, 10, 3, 18, 19],
                backgroundColor: [
                    '#3b82f6', // Xanh dương
                ],
                borderColor: '#ffffff',
                borderWidth: 2,
            },
        ],
    };

    // Cấu hình biểu đồ
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Biểu đồ doanh thu nửa đầu năm 2024',
            },
        },
    };

    return (
        <div className="w-full p-4 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold  text-gray-700 mb-4">
                Biểu đồ Doanh thu
            </h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
