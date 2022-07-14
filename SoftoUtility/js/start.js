let version = "Beta 20220.002";
let title = document.head.querySelector('title');
let startTitle = document.querySelector('.start__version');

startTitle.innerHTML = version;
title.innerHTML = `Softo OS ${version}`;