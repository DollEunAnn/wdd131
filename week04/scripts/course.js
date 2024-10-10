const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },

};


function setCourseDetails(course) {

    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");

    courseName.textContent = course.code;
    courseCode.textContent = course.name;
}

function setSectionDetails(sections) {

    return `<tr>
    <td>${sections.sectionNum}</td>
    <td>${sections.roomNum}</td>
    <td>${sections.enrolled}</td>
    <td>${sections.days}</td>
    <td>${sections.instructor}</td></tr>`

}

function renderSections(sections) {
    const html = sections.map(setSectionDetails);
    document.querySelector("#sections").innerHTML = html.join("");
}

setCourseDetails(aCourse);
renderSections(aCourse.sections);

// Event Listeners
document.querySelector('#enrollStudent').addEventListener('click', function () {
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.enrollStudent(sectionNum);
})

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});