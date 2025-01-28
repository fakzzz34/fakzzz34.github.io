function calculateBMI() {
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (!weight || !height || height <= 0 || weight <= 0) {
      alert('Harap masukkan nilai yang valid untuk berat dan tinggi!');
      return;
    }
  
    // Rumus BMI: berat / (tinggi)^2
    const heightInMeters = height / 100;
    const bmi = (weight / Math.pow(heightInMeters , 2)).toFixed(2);
  
    let description = '';
  
    // Pemilihan BMI sesuai jenis kelamin
    if (gender === 'male') {
      if (bmi < 18.5) {
        description = 'Kamu kekurangan berat badan. Pertimbangkan untuk menambah berat badan demi kesehatan yang lebih baik.';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        description = 'Berat badanmu normal. Hebat!';
      } else if (bmi >= 25 && bmi < 29.9) {
        description = 'Kamu kelebihan berat badan. Pertimbangkan untuk menjalani gaya hidup yang lebih sehat.';
      } else {
        description = 'Kamu dalam kisaran obesitas. Sebaiknya konsultasikan ke dokter.';
      }
    } else if (gender === 'female') {
      if (bmi < 18.0) {
        description = 'Kamu kekurangan berat badan. Pertimbangkan untuk menambah berat badan demi kesehatan yang lebih baik.';
      } else if (bmi >= 18.0 && bmi < 24.4) {
        description = 'Berat badanmu normal. Hebat!';
      } else if (bmi >= 24.4 && bmi < 29.9) {
        description = 'Kamu kelebihan berat badan. Pertimbangkan untuk menjalani gaya hidup yang lebih sehat.';
      } else {
        description = 'Kamu dalam kisaran obesitas. Sebaiknya konsultasikan ke dokter.';
      }
    }
  
    // Display the results
    document.getElementById('bmi-result').innerText = `BMI Anda: ${bmi}`;
    document.getElementById('bmi-description').innerText = description;
  }
  