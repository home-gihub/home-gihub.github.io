currentcat =1

function opencat(cat) {
    // cat is the number of page
    document.getElementById(`cat ${currentcat}`).className = "catmain hidden"
    document.getElementById(`hdr ${currentcat}`).className = "header"
    document.getElementById(`cat ${cat}`).className = "catmain"
    document.getElementById(`hdr ${cat}`).className = "header active"
    currentcat=cat
}