

<template>
    <div class="notes">
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                 <textarea
                 v-model="newNote"
                    class="textarea"
                    placeholder="Add notes"
                    ref="newNoteRef"
                  />
                </div>
              </div>
              
              <div class="field is-grouped is-grouped-right">
                <div class="control">
                  <button
                  @click="addNote"
                  :disabled="!newNote"
                    class="button is-link has-background-success"
                  >
                    Add Notes
                </button>
                </div>
              </div>
        </div>
       
        <div
            v-for="note in notes"
            :key="note.id"
             class="card mb-4"
        >
        
            <div class="card-content">
              <div class="content">
               {{ note.content }}
              </div>
            </div>
            <footer class="card-footer">
            
              <a href="#" class="card-footer-item">Edit</a>
              <a href="#" class="card-footer-item">Delete</a>
            </footer>
          </div>  
    </div>
</template>

<script setup>
//imports
import {ref} from 'vue'

const newNote=ref('')
const newNoteRef=ref(null)

 const notes=ref([
    {
       id:'id1',
       content:'orem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta vitae autem tempore at obcaecati itaque voluptatem nobis laborum, earum dolore ullam. Sit nihil, dolores ad dolorem sed molestias debitis.'
    },
    {
       id:'id2',
       content:'THis is A shorter note'
    }
 ])
  const addNote=()=>{
   let currentStamp= new Date().getTime()
   let id =currentStamp.toString()
    let note={
        id: id,
        content:newNote.value
    }
    notes.value.unshift(note)
    newNote.value=''
    newNoteRef.value.focus()
    console.log(note);
  }
</script>
