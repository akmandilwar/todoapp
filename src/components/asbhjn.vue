       <div v-on:click="click(task)">
                      {{task}}
                    <button class="btn" v-on:click="handleDelete(task)">Delete</button>
                    <button class="btn1" v-on:click="handleEdit(task)">Edit</button>
                  </div>