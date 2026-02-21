// =======================
// بيانات الأسئلة
// =======================

const quizData = [

{q:"1- ما وظيفة بروتوكول IP؟",
options:["تشفير البيانات","تحديد العناوين ومسار الحزم","إرسال البريد"],
answer:1,
explain:"IP مسؤول عن عنونة الأجهزة وتحديد مسار الحزم عبر الشبكة."},

{q:"2- أي بروتوكول يضمن وصول البيانات بشكل صحيح؟",
options:["UDP","TCP","ICMP"],
answer:1,
explain:"TCP يضمن الوصول ويعيد إرسال الحزم المفقودة."},

{q:"3- ما ميزة UDP الأساسية؟",
options:["الضمان الكامل","السرعة","التشفير"],
answer:1,
explain:"UDP أسرع لأنه لا ينتظر تأكيد الاستلام."},

{q:"4- ARP يستخدم لتحويل:",
options:["IP إلى MAC","MAC إلى IP","DNS إلى IP"],
answer:0,
explain:"ARP يُستخدم لمعرفة عنوان MAC المقابل لـ IP داخل الشبكة المحلية."},

{q:"5- DNS يقوم بـ:",
options:["توزيع IP","تحويل اسم الموقع إلى IP","تشفير الاتصال"],
answer:1,
explain:"DNS يحول أسماء النطاقات إلى عناوين IP."},

{q:"6- HTTPS يعتمد على:",
options:["SSL/TLS","UDP","ARP"],
answer:0,
explain:"HTTPS يستخدم SSL/TLS لتأمين الاتصال."},

{q:"7- أمر Ping يعتمد على:",
options:["TCP","ICMP","FTP"],
answer:1,
explain:"Ping يستخدم ICMP لاختبار الاتصال."},

{q:"8- DHCP وظيفته:",
options:["توزيع IP تلقائيًا","حذف الأجهزة","تشفير البيانات"],
answer:0,
explain:"DHCP يوزع عناوين IP تلقائيًا للأجهزة."},

{q:"9- HTTP يعمل في طبقة:",
options:["التطبيق","النقل","الفيزيائية"],
answer:0,
explain:"HTTP من بروتوكولات Application Layer."},

{q:"10- أيهما أسرع غالبًا؟",
options:["TCP","UDP","متساويان"],
answer:1,
explain:"UDP أسرع لأنه لا ينتظر تأكيد الاستلام."},

{q:"11- المنفذ الافتراضي لـ HTTP هو:",
options:["80","443","21"],
answer:0,
explain:"HTTP يعمل على Port 80."},

{q:"12- المنفذ الافتراضي لـ HTTPS هو:",
options:["80","53","443"],
answer:2,
explain:"HTTPS يعمل على Port 443."},

{q:"13- FTP يستخدم لـ:",
options:["مزامنة الوقت","نقل الملفات","عنونة الأجهزة"],
answer:1,
explain:"FTP يُستخدم لنقل الملفات بين الأجهزة."},

{q:"14- SNMP يُستخدم لـ:",
options:["إدارة الشبكات","تصفح المواقع","إرسال البريد"],
answer:0,
explain:"SNMP لمراقبة وإدارة أجهزة الشبكة."},

{q:"15- NTP مسؤول عن:",
options:["مزامنة الوقت","تشفير البيانات","إرسال البريد"],
answer:0,
explain:"NTP يستخدم لمزامنة الوقت بين الأجهزة."},

{q:"16- POP يُستخدم لـ:",
options:["إرسال البريد","استقبال البريد","تشفير البريد"],
answer:1,
explain:"POP يُستخدم لاستقبال البريد الإلكتروني."},

{q:"17- SMTP يُستخدم لـ:",
options:["إرسال البريد","نقل الملفات","توزيع IP"],
answer:0,
explain:"SMTP يُستخدم لإرسال البريد الإلكتروني."},

{q:"18- أي بروتوكول أكثر أمانًا؟",
options:["HTTP","HTTPS","FTP"],
answer:1,
explain:"HTTPS يستخدم التشفير عبر SSL/TLS."},

{q:"19- المنافذ المحجوزة (Well-known ports) تنتهي عند:",
options:["1024","80","65535"],
answer:0,
explain:"المنافذ المحجوزة من 0 إلى 1024."},

{q:"20- فهم البروتوكولات يساعد في:",
options:["فهم الهجمات","تسريع الإنترنت فقط","زيادة حجم الكابل"],
answer:0,
explain:"معظم الهجمات السيبرانية تستهدف البروتوكولات."}

];


// =======================
// تحميل الأسئلة
// =======================

function loadQuiz(){

const container = document.getElementById("questions");

quizData.forEach((item,index)=>{

container.innerHTML += `
<div class="card">
<p><strong>${item.q}</strong></p>

${item.options.map((opt,i)=>`
<label>
<input type="radio" name="q${index}" value="${i}" onclick="checkAnswer(${index})">
${opt}
</label><br>
`).join("")}

<div id="feedback${index}" style="margin-top:10px;"></div>

</div>
`;

});

}


// =======================
// تصحيح فوري لكل سؤال
// =======================

function checkAnswer(qIndex){

let selected = document.querySelector(`input[name="q${qIndex}"]:checked`);
let feedback = document.getElementById("feedback"+qIndex);

if(!selected) return;

let selectedValue = parseInt(selected.value);
let correctAnswer = quizData[qIndex].answer;

if(selectedValue === correctAnswer){

feedback.innerHTML = "✅ إجابة صحيحة — " + quizData[qIndex].explain;
feedback.style.color = "#22c55e";

}else{

feedback.innerHTML = "❌ إجابة خاطئة — " + quizData[qIndex].explain;
feedback.style.color = "#ef4444";

}

}


// =======================
// حساب النتيجة النهائية
// =======================

function calculateScore(){

let score = 0;

quizData.forEach((item,index)=>{
let selected = document.querySelector(`input[name="q${index}"]:checked`);
if(selected && parseInt(selected.value) === item.answer){
score++;
}
});

let percentage = (score / quizData.length) * 100;

document.getElementById("result").innerHTML =
"<h2>🎯 نتيجتك: " + score + " / " + quizData.length + "</h2>";

if(percentage >= 70){

// 🔥 هنا حفظ إكمال المرحلة الثالثة
localStorage.setItem("lesson_3","true");

document.getElementById("result").innerHTML +=
"<p style='color:#22c55e;'>🎉 تم إنهاء المرحلة الثالثة بنجاح!</p>";

}else{

document.getElementById("result").innerHTML +=
"<p style='color:#ef4444;'>❌ تحتاج 70% لاجتياز المرحلة.</p>";

}

}


// تحميل الأسئلة عند فتح الصفحة
window.onload = loadQuiz;