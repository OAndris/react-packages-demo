import React from 'react';
import { Bar, Line, Pie, Doughnut, Radar, Polar } from 'react-chartjs-2';
import Title from '../Title/Title';
import './ReactChartJs2.scss';

const ReactChartJs2 = () => {
    const chartData = {
        labels: [
            'Boston',
            'Worcester',
            'Springfield',
            'Lowell',
            'Cambridge',
            'New Bedford',
        ],
        datasets: [
            {
                label: 'Population',
                data: [617594, 181045, 153060, 106519, 105162, 95072],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ],
                borderWidth: 1,
                borderColor: '#777',
                hoverBorderWidth: 2,
                hoverBorderColor: '#000',
            },
        ],
    };

    const chartOptions = {
        title: {
            display: true,
            text: 'Largest Cities in Massachusetts',
            fontSize: 25,
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#000',
            },
        },
        layout: {
            padding: {
                left: 50,
            },
        },
        tooltips: {
            enabled: true,
        },
    };

    return (
        <section>
            <Title
                title="react-chartjs-2"
                href="https://github.com/jerairrest/react-chartjs-2"
            />
            <div id="charts">
                <Bar data={chartData} options={chartOptions} />
                <Line data={chartData} options={chartOptions} />
                <Pie data={chartData} options={chartOptions} />
                <Doughnut data={chartData} options={chartOptions} />
                <Radar data={chartData} options={chartOptions} />
                <Polar data={chartData} options={chartOptions} />
            </div>
        </section>
    );
};

export default ReactChartJs2;
