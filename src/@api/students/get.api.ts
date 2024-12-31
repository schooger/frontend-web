//import axios from 'axios'

export async function find_all() {
  return [
    { student_id: 1, student_first_name: 'Oualid', student_last_name: 'Ouarrho', student_email: 'ouarrho@schooger.com', student_phone: '+212 612 34 56 78', student_image: 'avatar-1.png', planet_id: 6, class_name: 'Class A', },
    { student_id: 2, student_first_name: 'Nora', student_last_name: 'Hakim', student_email: 'nora@schooger.com', student_phone: '+212 612 34 56 78', student_image: 'avatar-4.png', planet_id: 5, class_name: 'Class A', },
    { student_id: 3, student_first_name: 'Abir', student_last_name: 'Hakim', student_email: 'abir@schooger.com', student_phone: '+212 612 34 56 78', student_image: 'avatar-7.png', planet_id: 3, class_name: 'Class A', },
    { student_id: 4, student_first_name: 'Dodo', student_last_name: 'Hakim', student_email: 'dodo@schooger.com', student_phone: '+212 612 34 56 78', student_image: 'avatar-8.png', planet_id: 1, class_name: 'Class A', },
  ]
}

export async function find_one({ student_id }: { student_id: number }) {
  return {
    student_id: student_id,
    student_first_name: 'Ouarrho',
    student_last_name: 'Ouarrho',
    student_email: 'ouarrho@schooger.com',
    student_phone: '+212 612 34 56 78',
    student_image: 'avatar-1.png',
    planet_id: 6,
    class_name: 'Class A',
  }
}