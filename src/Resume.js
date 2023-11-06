import React from "react";
import "./resume.css"
export function Resume()
{
    return(
        <div>
            <div className="full">
            <div class="Header">
            <p className="sri">Sri Hari D</p>
            <p><b>Phone No:</b> 9092290363| <b>Email: <a href="mailto:sriharid001@gmail.com">sriharid001@gmail.com</a></b>
| <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/sri-hari-17b755204">linkedin.com/in/sri-hari-17b755204</a>
</p>
            </div>
            <div class="black-line"></div>

            
            <div class="objective">
            <p className="obj"><b>OBJECTIVE</b></p>
            <p>A CSE graduate student seeking an opportunity across the fields of software engineering and  its associated disciplines</p>
            </div>
             <div class="educational_qualification">
             <h1 className="obj">EDUCATIONAL QUALIFICATION</h1>


<table  className="table"border="1">
    <tr>
        <th>QUALIFICATION</th>
        <th>INSTITUTION</th>
        <th>BOARD/UNIVERSITY</th>
        <th>YEAR OF PASSING</th>
        <th>PERCENTAGE</th>
    </tr>
    <tr>
        <th>U.G - B.E in Computer Science and Engineering</th>
        <td>Jansons Institute of Technology</td>
        <td>Anna University</td>
        <td>2023</td>
        <td>85%</td>
        </tr>
        <tr>
           <th>HSC(12THSTD)</th> 
           <td>Rasi International School</td>
           <td>Central Board of Secondary Education</td>
           <td>2019</td>
           <td>65%</td>
        </tr>
        <tr>
            <th>SSLC(10THSTD)</th>
            <td>Rasi International School</td>
           <td>Central Board of Secondary Education</td>
           <td>2017</td>
           <td>92%</td>
        </tr>
</table>
             </div>

<br>
</br>
<div class="technical_skills">
<h1 className="obj">TECHNICAL SKILLS</h1>
<p><b> Programming Language :</b>Core Java, DSA</p>
<p><b>Web Technologies : </b>HTML5, CSS3, Java Script</p>
<p><b>Server Side Programming :  </b>Node js, Express js</p>
<p><b>Client Side Programming :   </b>React js</p>
<p><b>Data Base : </b>No SQL(MongoDB)</p>
</div>
<br>
</br>

<div className="project">
<h1 className="obj"><b>ACADEMIC PROJECTS -Under Development</b></h1>
<p><b>Developed a Web Application - (Stock Management System) {2023}</b></p>
<p>▪ The aim of the Application is to manage the stocks, receive new items, manage 
warehouse processes such as picking, packing, and shipping, prevent product obsolescence 
and spoilage, and ensure your products are never out of stock. This project is developed by 
using Mango DB and React js.</p>
</div>


<div class="certificates">
<h1 className="obj"><b>CERTIFICATES</b></h1>
<p>➢ Completed Introduction to java course in Coursera <br></br>
➢ Introduction to Cloud, A course on cognitiveclass.ai Powered by IBM Developer Skills Network</p>
<h1 className="obj"><b>STRENGTHS</b></h1>
<p>✓ Technical Skills<br></br>
✓ Adaptability/Flexibility<br></br>
✓ Conflict Resolution<br></br>
</p>
</div>
     <div class="declaration">
     <h1 className="obj"><b>DECLARATION</b></h1>
<p>I here by declare that the details furnished above are true to the best of my knowledge.
</p></div>
<div className="last">
<p>Yours Faithfully,<br></br>
<br>
</br>

<br>
</br>
<br></br>
 Sri Hari D </p>
</div>
     
    
        </div>
        </div>
    )
}