let url = "http://localhost:3000/products"
function LOAD()
{
    $.ajax({
        url : url,
        type : "GET",
        success : (posRes) =>{
            console.log(posRes)
            let x = ``
            x = x + `
            <div class="container mt-5" >
            <table  class="table

            table-bordered

            table-light

            table-hover

            table-striped

            table-sm">


            <thead>
              <tr>
                <th>S.No</th>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Time in</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
           <tbody>
            `
            for(let i = 0; i<posRes.length;i++)
            {
                x = x + `
                <tr>
                <th scope="row">${posRes[i].id}</th>
                <td>${posRes[i].emp_id}</td>
                <td>${posRes[i].name}</td>
                <td>${posRes[i].time}</td>
                <td><button style="background:none ; border:none" class="fa fa-edit text-warning" data-toggle = 'modal'
                                 data-target = '#my_division' ></button></td>



                                 <td><span style="cursor: pointer" onclick="del(${posRes[i].id})" class="fa fa-trash text-danger"></span></td>
              </tr>
              `
                
            }
            x = x + `  </tbody>
            </table>
            </div>
            `
            document.getElementById('op').innerHTML = x
        },
        error : (errRes) =>{
            console.log("Error is:- ",errRes.status)
        }
    })
}
//LOAD()

function del(x){
    $.ajax({
        url : url+'/'+x,
        type : "DELETE",
        success : (posRes) =>{
            console.log(posRes)
        },
        error : (errRes) =>{
            console.log(errRes)
        }
    })
    LOAD();
}
/////////////////////////////
$(document).ready(()=>{
    $("#getData").click(()=>{
        LOAD()
    })
    $("#send").click((e)=>{
        e.preventDefault()
        let data = {
            "id" : parseInt(document.getElementById("id").value),
            "emp_id" : parseInt(document.getElementById("emp_id").value),
            "name" : document.getElementById("name").value,
            "time" : parseInt(document.getElementById("time").value)
        }
        $.ajax({
            url : url,
            type : "POST",
            data : data,
            success : (posRes) =>{
                console.log(posRes)
            },
            error : (errRes) =>{
                console.log(errRes)
            }
        })
        LOAD()
    })
    $("#update").click((e)=>{
        e.preventDefault()
        let id = parseInt(document.getElementById("2id").value)
        let data = {
            "emp_id" : parseInt(document.getElementById("2emp_id").value),
            "name" : document.getElementById("2name").value,
            "time" : parseInt(document.getElementById("2time").value)
        }
        $.ajax({
            url : url+'/'+id,
            type : "PUT",
            data : data,
            success : (posRes) =>{
                console.log(posRes)
            },
            error : (errRes) =>{
                console.log(errRes)
            }
        })
        LOAD()
    })
})

