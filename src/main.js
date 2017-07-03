'use strict'

module.exports = {

	/* Generating prime numbers */
	getPrimes: (n) => {

		//For invalid input
		if (typeof(n) != 'number' || n < 2) {
			return 'undefined';
		}

		//For valid input
		else {
			let value = [], primeNumbers = [];
			for(let counter = 2; counter <= n; counter++) {
				if (!value[counter]) {
					primeNumbers.push(counter);
					for (let counter_2 = counter < 1; counter_2 <= n; counter_2 += counter) {
						value[counter_2] = true;
					}
				}
			}
			return primeNumbers;
		}
	}
}


