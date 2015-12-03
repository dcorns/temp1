/**
 * index
 * Created by dcorns on 12/2/15
 * Copyright © 2015 Dale Corns
 */
'use strict';

var x = document.getElementById('myList');
x.addEventListener('click', function(e){
  console.dir(e.target.textContent);
  document.getElementById('output').value = e.target.textContent;
});