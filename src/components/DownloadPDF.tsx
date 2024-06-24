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

          // Calculate the scale factor to fit the image within the PDF
          const scaleFactor = Math.min(
            pdfWidth / imgProps.width,
            pdfHeight / imgProps.height
          );

          // Calculate the dimensions of the scaled image
          const scaledWidth = imgProps.width * scaleFactor;
          const scaledHeight = imgProps.height * scaleFactor;

          // Calculate the position to center the image within the PDF
          const x = (pdfWidth - scaledWidth) / 2;
          const y = (pdfHeight - scaledHeight) / 2;

          // Adding the scaled image to the PDF with a border
          pdf.rect(x - 5, y - 5, scaledWidth + 10, scaledHeight + 10, "S");
          pdf.addImage(imgData, "PNG", x, y, scaledWidth, scaledHeight);

          // Adding another image to the PDF
          const logo = await loadImage("/images/DownloadLogo.png");
          pdf.addImage(logo, "PNG", 0, pdfHeight, pdfWidth, pdfHeight);

          pdf.save(`${workout.name}.pdf`);
        }
      );
    }
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
function loadImage(arg0: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new window.Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = arg0;
  });
}
