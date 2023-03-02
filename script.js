const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.querySelectorAll('.price');
	let sum = 0;
	for (let i = 0; i < prices.length; i++) {
		let x = Number(prices[i].innerText);
		sum += x;
	}
    document.getElementById('table').innerHTML += 
		`
	   <tr id="ans">
          <td></td>
          <td>${sum}</td>
        </tr>`
  
};

getSumBtn.addEventListener("click", getSum);

