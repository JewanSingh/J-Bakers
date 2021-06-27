document.addEventListener('DOMContentLoaded',function(){
	
	var list = document.querySelector('.cake');
	var forms = document.forms;	
	
	var searchBar = forms['search-cakes'].querySelector('input');
	
	searchBar.addEventListener('keyup', function(e){
		
		var term = e.target.value.toLowerCase();
		var books = list.getElementsByTagName('p');
		
		Array.from(cake).forEach(function(cake){
			
			let title = cake.firstElementChild.textContent;
			if(title.toLowerCase().indexOf(term) != -1){
				cake.style.display ='block';
			}else{
				cake.style.display ='none';
			}
			
		})
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})