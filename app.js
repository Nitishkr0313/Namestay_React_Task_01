const root=document.getElementById("root"); //To test JS DOM
const rootElement=ReactDOM.createRoot(root); //To test ReactJS DOM (Act as root element in ReactJS DOM)

//Following three lines of code to add event to button to test different scenario with clicks
document.getElementById("btnjs").addEventListener("click",JSway);
document.getElementById("btnreactjs").addEventListener("click",ReactJSway);
document.getElementById("btncourses").addEventListener("click",ReactJScourses);


//Manipulates DOM using document object
function JSway() {
const element=document.createElement("h1");

element.innerHTML="Hello World !!!";
root.appendChild(element);
}

//Manipulates DOM using React Object. Rendering "Hello World to div element which is root in this case"
function ReactJSway() {
const reactElement=React.createElement("h1",
{
    "title": "React By Nitish",
    "style": {'border': 'solid green 1px',"background-color":"green"},
    
},
"Hello World!!"
);

rootElement.render(reactElement);
}


//Do some more cool stuff using React JS.
function ReactJScourses() {
    courses=["Namaste JS","Namaste React"];
    reactElements=[];
    for(courseindex=0;courseindex<courses.length;courseindex++)
    {
        reactElements.push(React.createElement("li",
        {'title':`This is awesome ${courses[courseindex]} course`},
        courses[courseindex])
        );
    
    }
    document.getElementById("courselist").innerHTML="Web Developer Courses:"
    rootElement.render(reactElements);

}