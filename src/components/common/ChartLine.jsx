import React, { useEffect, useRef } from "react";

function ChartLine() {
  const chartRef = useRef(null); // Untuk mereferensikan elemen canvas
  const chartInstance = useRef(null); // Untuk menyimpan instance chart

  useEffect(() => {
    // Ambil elemen canvas
    const ctx = chartRef.current.getContext("2d");

    // Jika ada instance chart sebelumnya, hancurkan dulu
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Buat instance chart baru dan simpan di chartInstance
    chartInstance.current = new window.Chart(ctx, {
      type: "line",
      data: {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [
          {
            label: "Lorem",
            data: [2, 5, 9, 7, 13, 11],
            backgroundColor: ["#D2D2D2"],
            borderColor: ["#0D0D0D"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Bersihkan chart saat komponen unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Kosong agar hanya dijalankan sekali saat mount

  return <canvas ref={chartRef} className="w-full min-h-fit"></canvas>;
}

export default ChartLine;
