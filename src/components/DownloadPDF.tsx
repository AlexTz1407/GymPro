import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Workout } from "@/types/workout";
import Image from "next/image";
import React from "react";

interface DownloadPDFProps {
  workout: Workout;
}

const DownloadPDF: React.FC<DownloadPDFProps> = ({ workout }) => {
  const downloadPDF = async () => {
    const input = document.getElementById("workout-display");
    if (input) {
      html2canvas(input, { backgroundColor: "#17181C" }).then(
        async (canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("landscape", "mm", "a4");
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

          // Adding the canvas image to the PDF
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

          // Adding a title to the PDF
          //pdf.setFontSize(20);
          //pdf.text("Workout Summary", pdfWidth / 2, 10, { align: "center" });

          // Adding another image to the PDF
          const logo = await loadImage("/images/DownloadLogo.png");
          pdf.addImage(logo, "PNG", 0, pdfHeight, pdfWidth, pdfHeight);

          pdf.save(`${workout.name}.pdf`);
        }
      );
    }
  };

  // Function to load an image
  const loadImage = (src: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL("image/png"));
        }
      };
    });
  };

  return (
    <button onClick={downloadPDF} className="">
      <Image
        src="/images/downloadbtn.png"
        alt="Download"
        width={40}
        height={40}
        className=""
      />
    </button>
  );
};

export default DownloadPDF;
