createGrid(50);
        let size = document.getElementById('grid-size');
        size.addEventListener("click", () => { createGrid(sizeGrid()) });
        let clear = document.getElementById('clear');
        clear.addEventListener("click", clearGridColors);

        let selectedColor = 'black';
        let rainbow = document.getElementById('rainbow');
        rainbow.addEventListener("click", () => selectedColor = 'rainbow');
        let black = document.getElementById('black');
        black.addEventListener("click", () => selectedColor = 'black');

        function sizeGrid() {
            let numRowsAndColumns = prompt("Enter a grid size between 5 and 55, inclusive.");
            if (numRowsAndColumns >= 5 && numRowsAndColumns <= 55) {
                return numRowsAndColumns;
            }    
            sizeGrid();
        }

        function createGrid(numRowsAndColumns) {
            resetGrid();
            let grid = document.querySelector('.grid-container');
            
            grid.style.setProperty('--grid-rows', numRowsAndColumns);
            grid.style.setProperty('--grid-cols', numRowsAndColumns);
        
            for (i = 0; i < numRowsAndColumns; i++) {
                for (j = 0; j < numRowsAndColumns; j++) {
                    let div = document.createElement('div');
                    div.style.backgroundColor = 'transparent';
                    grid.appendChild(div);
                    div.addEventListener("mouseenter", function () {
                        this.style.backgroundColor = 'black';
                        if (selectedColor === 'rainbow') {
                            this.style.backgroundColor = changeRandomColor();
                        }
                    });
                }
            }
        }

        function clearGridColors() {
            document.querySelectorAll('.grid-container > div').forEach(div => {
                div.style.backgroundColor = 'transparent';
            })
        }

        function resetGrid() {
            document.querySelectorAll('.grid-container > div').forEach(div => {
                div.remove();
            })
        }

        function changeRandomColor() {
            let symbols, color;
            symbols = "0123456789ABCDEF";
            color = "#";


            for (i = 0; i < 6; i++) {
                color += symbols[Math.floor(Math.random() * 16)]
            }
            return color;
        }