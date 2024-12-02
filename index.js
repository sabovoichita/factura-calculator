function calculateBill(baseAmount) {
  const VAT_RATE = 0.21; // 21% VAT
  const IRPF_RATE = 0.01; // 1% IRPF

  const vatAmount = baseAmount * VAT_RATE;
  const irpfDeduction = baseAmount * IRPF_RATE;
  const totalAmount = baseAmount - irpfDeduction + vatAmount;

  return {
    baseAmount: baseAmount.toFixed(2),
    vatAmount: vatAmount.toFixed(2),
    irpfDeduction: irpfDeduction.toFixed(2),
    totalAmount: totalAmount.toFixed(2),
  };
}

document.getElementById("calculateBill").addEventListener("click", function () {
  const baseAmount = parseFloat(document.getElementById("baseAmount").value);

  if (isNaN(baseAmount) || baseAmount <= 0) {
    alert("Please enter a valid base amount.");
    return;
  }

  const {
    baseAmount: base,
    vatAmount,
    irpfDeduction,
    totalAmount,
  } = calculateBill(baseAmount);

  document.getElementById("baseAmountDisplay").textContent = `€${base}`;
  document.getElementById("irpfDisplay").textContent = `€${irpfDeduction}`;
  document.getElementById("vatDisplay").textContent = `€${vatAmount}`;
  document.getElementById("totalDisplay").textContent = `€${totalAmount}`;
});
