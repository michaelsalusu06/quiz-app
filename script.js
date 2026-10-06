let questionNumber = 1;
let score = 0;
let correctAnswer = null;

let q1 = "In the sci-fi novel Project Hail Mary, the alien character Rocky communicates using musical chords.";
let q2 = "The overhead press primarily trains the latissimus dorsi muscles in the back";
let q3 = "Bubble sort is widely considered the most efficient sorting algorithm for massive datasets";
let q4 = "In Jujutsu Kaisen, Suguru Geto's cursed technique allows him to consume and control cursed spirits";
let q5 = "The Biopython library includes a module called SeqIO that is used to parse GenBank and FASTA sequence files";
let q6 = "In the Marvel universe, Mystique is a mutant with the ability to shape-shift";

let questions = [q1, q2, q3, q4, q5, q6];
let ans = ["T", "F", "F", "T", "T", "F"];
let i = 0;

let question = document.getElementById('question');
let point = document.getElementById('score');
let points = Number(point.textContent);
let timer = document.getElementById('timer');
let timers = Number(timer.textContent);
let time = 10;

let tru = document.getElementById('tru');
let fals = document.getElementById('fals');
let endScore = document.getElementById('endScore');
let correctAns = document.getElementById('correctAns');
let answr = document.getElementById('answrs');

let myTime = setInterval(reduceTimer, 1000);

function reduceTimer()
{
    if(i == questions.length) clearInterval(myTime);
    timers = timers - 1;
    timer.textContent = timers;

    if(timers == 0)
    {
       i++;
       let question1 = question.textContent;
       question1 = questions[i];
       question.textContent = question1;
       timers = 10;
    }
}

function trueAns()
{
    if(ans[i] == "T")
    {
        points = points + 10;
        point.textContent = points;
    }
    i++;
    
    if(i == questions.length)
    {
        question.textContent = "You Have Finished The Quiz";
        endScore.textContent = "Your Score is " + points + "/" + questions.length * 10;
        correctAns.textContent = "You Answered " + (points / 10) + "/" + questions.length + " Questions Correctly";
        answr.removeChild(tru);
        answr.removeChild(fals);
    }
    
    else if(i < questions.length)
    {
        let question1 = question.textContent;
        question1 = questions[i];
        question.textContent = question1;
        timers = 10;
        timer.textContent = timers;
    }
}

function falseAns()
{
    if(ans[i] == "F")
    {
        points = points + 10;
        point.textContent = points;
    }
    i++;
    
    if(i == questions.length)
    {
        question.textContent = "You Have Finished The Quiz";
        endScore.textContent = "Your Score is " + points + "/" + questions.length * 10;
        correctAns.textContent = "You Answered " + (points / 10) + "/" + questions.length + " Questions Correctly";
        answr.removeChild(tru);
        answr.removeChild(fals);
    }
    
    else if(i < questions.length)
    {
        let question1 = question.textContent;
        question1 = questions[i];
        question.textContent = question1;
        timers = 10;
        timer.textContent = timers;
    }
}




