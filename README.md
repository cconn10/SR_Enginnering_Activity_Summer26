## Sports Reference Engineering Internship Application Prompt

### Colin Conn - Summer 2026

#### Javascript

Data is loaded using the asynchronous fetch method, this allows for any number of teams to be used assuming the same json file structure.

Variables are created for the table's header and body elements, as well as to turn the data into a more easily readable list.

The list of teams is looped through to create the rows and cells to more easily fill the table later. Each cell is given a unique id to allow them to be targeted later.

Finally, each team's record is looped through in order to fill each cell. This is done first with a for loop to access each team, and then a for each loop to access the specific win/loss records. Each cell created earlier is first checked to see if it has already been given data, if so, it is ignored. Otherwise the team's win or loss count is assigned to the cell.

#### CSS

I added some limited styling as it felt wrong to leave the table as-is. I added a background color for the header rows and a highlight color to more easily target specific cells.
