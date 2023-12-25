const printBtn = document.querySelector('.print-btn');

const downloadPDF = () => {
    window.print();
};

printBtn.addEventListener('click', downloadPDF);
