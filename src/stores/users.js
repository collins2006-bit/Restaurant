import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
    state: () => {
        const users = {
            0:{
                name:"john Doe",
                email:"john@example",
                phone:"254113523497",
                deliveryAddress:"123, 4th avenue, Nairobi",
                password:"john123",
                userType:"customer",
                activeAccount:true

            },
            1:{
                name:"TrevorDoe",
                email:"Trevor@example",
                phone:"254113523497",
                deliveryAddress:"123, 4th avenue, Nairobi",
                password:"john123",
                userType:"customer",
                activeAccount:true

            },
            2:{
                name:"Shaddy Doe",
                email:"Shaddy@example",
                phone:"254113523497",
                deliveryAddress:"123, 4th avenue, Nairobi",
                password:"john123",
                userType:"customer",
                activeAccount:true

            },
            3:{
                name:"Kim Doe",
                email:"Kim@example",
                phone:"254113523497",
                deliveryAddress:"123, 4th avenue, Nairobi",
                password:"john123",
                userType:"customer",
                activeAccount:false

            },
            4:{
                name:"collins",
                email:"collins.birore@starthmore.edu",
                phone:"12345678",
                deliveryAddress:"madaraka",
                password:"qwertyuio",
                userType:"Admin",
                activeAccount:true

            },
        }
       
       
       return {users }
    },
    actions:{
        
    }
})