// Weights for the formula: Carbon = w1*Cat + w2*Mat + w3*Trans + w4*Pack [cite: 17, 67]
const WEIGHTS = {
  category: 0.4,
  material: 0.3,
  transport: 0.2,
  packaging: 0.1
};

export const calculateEcoScore = (data, k = 0.5) => {
  // 1. Calculate Carbon Footprint [cite: 15, 66]
  const carbon = 
    (data.categoryVal * WEIGHTS.category) +
    (data.materialVal * WEIGHTS.material) +
    (data.transportVal * WEIGHTS.transport) +
    (data.packagingVal * WEIGHTS.packaging);

  // 2. Generate EcoScore [cite: 20, 71]
  const score = Math.max(0, 100 - (carbon * k));

  // 3. Determine Verdict [cite: 88]
  let verdict = "UNSUSTAINABLE";
  if (score >= 70) verdict = "SUSTAINABLE";
  else if (score >= 40) verdict = "MODERATE";

  return { carbon: carbon.toFixed(2), score: Math.round(score), verdict };
};
