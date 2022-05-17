

var studentData: Array<any> = [
    {id: '01', name: 'StudentA', class: 'A', grade1: 1, grade2: 2, grade3: 3, },
    {id: '02', name: 'StudentB', class: 'B', grade1: 3, grade2: 4, grade3: 5, },
    {id: '03', name: 'StudentC', class: 'C', grade1: 5, grade2: 6, grade3: 7, },
    {id: '04', name: 'StudentD', class: 'A', grade1: 7, grade2: 8, grade3: 9, },
    {id: '05', name: 'StudentE', class: 'B', grade1: 8, grade2: 9, grade3: 10, },

]

var showStudentList = function (data: any) {

    var _html:string = '';
    
    for (let std of data){
        
        var avg:number = (std.grade1 + std.grade2 + std.grade3)/3
        
        var ranking:string = '';
        if (avg > 8) {ranking = '1'} 
        else if (avg > 6) {ranking = '2'} 
        else if (avg > 4) {ranking = '3'} 
        else {ranking = '4'} 
        
        _html += `<tr> 
        <td>${std.id}</td>
        <td>${std.name}</td>
        <td>${std.class}</td>
        <td>${std.grade1}</td>
        <td>${std.grade2}</td>
        <td>${std.grade3}</td>
        <td>${avg}</td>
        <td>${ranking}</td>
        `
    }
    
    
    var list:any = document.getElementById('tbody-list');
    list.innerHTML = _html; 
}

showStudentList(studentData);
    
    // SEARCH INPUT
    
    var searchInput = <HTMLInputElement>document.getElementById("input")
    var searchButton = document.getElementById('search_button')
    
    searchButton.onclick = function () {
        let search = searchInput.value;
        console.log(searchInput.value)
        
        if (search == '') {
            alert('Error: Empty Value');
            return;
        }
        
        let studentFiltered = studentData.filter(function (obj){
            var classes = obj.class
            return classes == search 
        })
        console.log(studentFiltered)
        showStudentList(studentFiltered);
    }