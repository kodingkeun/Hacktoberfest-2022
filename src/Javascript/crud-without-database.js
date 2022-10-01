<table id="survey" >
  </table>

<script>
                              var rIndex, 
                     table = document.getElementById("survey"); // ganti dengan id table anda ini hanyalah contoh 
      
                 function SubmitData() //fungsi menambahkan data 
                 { 
         var getLastIndex = table.getElementsByTagName("tr").length; 
                     if(!HarusIsiData()){ 
                     var newRow = table.insertRow(getLastIndex), 
                         cell1 = newRow.insertCell(0), 
                         cell2 = newRow.insertCell(1), 
                         cell3 = newRow.insertCell(2), 
                         cell4 = newRow.insertCell(3), 
          cell5 = newRow.insertCell(4), 
          cell6 = newRow.insertCell(5), 
          cell7 = newRow.insertCell(6), 
           
                         vtiket = document.getElementById("vtiket").value, 
                         vnama = document.getElementById("vnama").value, 
                         vkategori = document.getElementById("vkategori").value; 
                         vhandle = document.getElementById("vhandle").value; 
          vnilai = document.getElementById("vnilai").value; 
          vbtn_edit = "<button onclick='EditData(" + getLastIndex + ")'>  Edit  </button>"; 
          vbtn_delet = "<button onclick='DeleteData(" + getLastIndex + ")'>Delete</button>"; 
              
                  
                         cell1.innerHTML = vtiket; 
                         cell2.innerHTML = vnama; 
                         cell3.innerHTML = vkategori; 
                         cell4.innerHTML = vhandle; 
          cell5.innerHTML = vnilai; 
          cell6.innerHTML = vbtn_edit; 
          cell7.innerHTML = vbtn_delet; 
          
          clearform(); 
           
            
         } 
                 } 
                  
                 function EditData(index) //fungsi tombol edit 
                 { 
         rIndex = index; 
                      document.getElementById("vtiket").value = table.rows[index].cells[0].innerHTML; 
           document.getElementById("vnama").value = table.rows[index].cells[1].innerHTML; 
           document.getElementById("vkategori").value = table.rows[index].cells[2].innerHTML; 
           document.getElementById("vhandle").value = table.rows[index].cells[3].innerHTML; 
           document.getElementById("vnilai").value = table.rows[index].cells[4].innerHTML; 
           alert("Silahkan ubah data ini pada ~List Products~"); 
            
                 } 
                  
                 function UpdateData() //fungsi tombol update 
                 { 
                     var vtiket = document.getElementById("vtiket").value; 
                         vnama = document.getElementById("vnama").value; 
                         vkategori = document.getElementById("vkategori").value; 
                     vhandle = document.getElementById("vhandle").value; 
         vnilai = document.getElementById("vnilai").value; 
      
                    if(!HarusIsiData()){ 
                        table.rows[rIndex].cells[0].innerHTML = vtiket; 
                        table.rows[rIndex].cells[1].innerHTML = vnama; 
                        table.rows[rIndex].cells[2].innerHTML = vkategori; 
                        table.rows[rIndex].cells[3].innerHTML = vhandle; 
            table.rows[rIndex].cells[4].innerHTML = vnilai; 
             
            clearform(); 
            document.getElementById("survey").scrollIntoView(true); 
            alert("Update Data Berhasil"); 
                   } 
                 } 
                  
                 function DeleteData(rowIndex) //fungsi tombol delete 
                 { 
         var index; 
         if (rowIndex != null) { 
          index = rowIndex; 
         } else { 
          index = rIndex; 
         } 
                     table.deleteRow(index); 
         alert("Data Berhasil Dihapus"); 
                      
                   
                 } 
         
        function clearform() //fungsi reset form setiap kali setelah klik submit / update 
        { 
        document.getElementById("vtiket").value = ""; 
                 document.getElementById("vnama").value = ""; 
                 document.getElementById("vkategori").value = ""; 
                 document.getElementById("vhandle").value = ""; 
        document.getElementById("vnilai").value = ""; 
        } 
         
         function HarusIsiData() //fungsi alert saat salah satu bagian form tidak diisi 
                 { 
                     var isEmpty = false, 
                         vtiket = document.getElementById("vtiket").value, 
                         vnama = document.getElementById("vnama").value, 
                         vkategori = document.getElementById("vkategori").value; 
                         vhandle = document.getElementById("vhandle").value; 
          vnilai = document.getElementById("vnilai").value; 
                  
                         if (vtiket === "") { 
                         alert("~Id Products~ HARUS DI ISI !!"); 
                         isEmpty = true; 
                     } 
                         else if (vnama === "") { 
                         alert("~Nama Product~ HARUS DI ISI !!"); 
                         isEmpty = true; 
                     } 
                         else if (vkategori === "") { 
                         alert("~Kategori~ HARUS DI ISI !!"); 
                         isEmpty = true; 
                     } 
          else if (vhandle === "") { 
                         alert("~Admin~ HARUS DI ISI !!"); 
                         isEmpty = true; 
                     } 
                         else if (vnilai ===""){ 
                         alert("~Jumlah~ HARUS DI ISI !!"); 
                         isEmpty = true; 
                        
                     } 
                     return isEmpty; 
                 }
  </script>
