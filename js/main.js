const mySiema = new Siema({

    //perPage: 3,
	  perPage: {
	   768: 2,
	  1024: 3,
	},
});


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');





prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());

