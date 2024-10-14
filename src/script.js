let acc = document.getElementsByClassName('accordion');
let i;

for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        var arrow = this.children[0];
        var svg = arrow.children[0];
        var path = svg.children[0];
        console.log(path);
        
        if(panel.classList.contains('block')){
            panel.classList.remove('block')
            panel.classList.add('hidden');
            arrow.style.transform = 'rotate(0deg)';
            path.style.stroke = '#5267DF';
        } else {
            this.style.borderBottom = '0';
            panel.classList.remove('hidden');
            panel.classList.add('block');
            arrow.style.transform = 'rotate(180deg)';
           path.style.stroke = '#fa5757';
        }
    });
}