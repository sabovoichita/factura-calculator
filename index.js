document.addEventListener("DOMContentLoaded", function () {
  // Function to calculate the bill based on base amount and remolque (towing cost)
  function calculateBill(baseAmount, costeRemolque) {
    const VAT_RATE = 21 / 100; // 21% VAT (IVA)
    const IRPF_RATE = 1 / 100; // 1% IRPF

    // Step 1: Deduct Coste Remolque (Towing cost)
    const baseImponible = baseAmount - costeRemolque;

    // Step 2: Deduct IRPF (1% of the Base Imponible)
    const irpfDeduction = baseImponible * IRPF_RATE;

    // Step 3: Add VAT (21% of the Base Imponible)
    const vatAmount = baseImponible * VAT_RATE;

    // Step 4: Calculate the total amount
    const totalAmount = baseImponible - irpfDeduction + vatAmount;

    // Return the calculated amounts
    return {
      baseAmount: baseAmount.toFixed(2),
      baseImponible: baseImponible.toFixed(2),
      irpfDeduction: irpfDeduction.toFixed(2),
      vatAmount: vatAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    };
  }

  // Function to handle the click event and calculate the bill
  function handleCalculateBill() {
    const baseAmountInput = document.getElementById("baseAmount").value;
    const costeRemolque = 300; // Fixed towing cost (€300)

    // Parse base amount input as a number
    const baseAmount = parseFloat(baseAmountInput);

    // Check if the input is valid
    if (isNaN(baseAmount) || baseAmount <= 0) {
      alert("Please enter a valid base amount.");
      return;
    }

    // Calculate the bill using the base amount and fixed towing cost
    const result = calculateBill(baseAmount, costeRemolque);

    // Update the display in the HTML
    document.getElementById(
      "baseAmountDisplay"
    ).textContent = `€${result.baseAmount}`;
    document.getElementById(
      "remolqueDisplay"
    ).textContent = `-€${costeRemolque.toFixed(2)}`;
    document.getElementById(
      "baseImponibleDisplay"
    ).textContent = `€${result.baseImponible}`;
    document.getElementById(
      "irpfDisplay"
    ).textContent = `€${result.irpfDeduction}`;
    document.getElementById("vatDisplay").textContent = `€${result.vatAmount}`;
    document.getElementById(
      "totalDisplay"
    ).textContent = `€${result.totalAmount}`;
  }

  // Initialize event listener for the calculate button
  document
    .getElementById("calculateBill")
    .addEventListener("click", handleCalculateBill);
});
