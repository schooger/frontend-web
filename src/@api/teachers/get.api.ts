//import axios from 'axios'

export async function find_all() {
  return [
    { teacher_id: 1, teacher_name: 'Oualid Ouarrho', teacher_email: 'ouarrho@schooger.com', teacher_phone: '+212 612 34 56 78', teacher_title: 'Maths', teacher_image: 'avatar-1.png' },
    { teacher_id: 2, teacher_name: 'Nora Hakim', teacher_email: 'nora@schooger.com', teacher_phone: '+212 612 34 56 78', teacher_title: 'Art & Music', teacher_image: 'avatar-4.png' },
    { teacher_id: 3, teacher_name: 'Abir Hakim', teacher_email: 'abir@schooger.com', teacher_phone: '+212 612 34 56 78', teacher_title: 'English', teacher_image: 'avatar-7.png' },
    { teacher_id: 4, teacher_name: 'Dodo Hakim', teacher_email: 'dodo@schooger.com', teacher_phone: '+212 612 34 56 78', teacher_title: 'Arabic', teacher_image: 'avatar-8.png' },
  ]
}

export async function find_one({ teacher_id }: { teacher_id: number }) {
    return {
     teacher_id: teacher_id, 
     teacher_name: 'Oualid Ouarrho', 
     teacher_email: 'ouarrho@schooger.com', 
     teacher_phone: '+212 612 34 56 78', 
     teacher_title: 'Maths', 
     teacher_image: 'avatar-1.png',
  }
}