import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileListService {

  constructor() { }

  getProfiles() {
    return [
      {
        "id": 1,
        "name": "Sophia Wilson",
        "role": "Finance Analyst",
        "image": "https://randomuser.me/api/portraits/women/1.jpg",
        "alt": "Profile picture of Jane Smith",
        "age": 53,
        "location": "Miami"
      },
      {
        "id": 2,
        "name": "Lucas Wright",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/men/2.jpg",
        "alt": "Profile picture of David Johnson",
        "age": 47,
        "location": "San Diego"
      },
      {
        "id": 3,
        "name": "Jane Smith",
        "role": "Cybersecurity Analyst",
        "image": "https://randomuser.me/api/portraits/women/3.jpg",
        "alt": "Profile picture of Emma Brown",
        "age": 45,
        "location": "Dallas"
      },
      {
        "id": 4,
        "name": "William Davis",
        "role": "Software Engineer",
        "image": "https://randomuser.me/api/portraits/men/4.jpg",
        "alt": "Profile picture of Michael Lee",
        "age": 32,
        "location": "Chicago"
      },
      {
        "id": 5,
        "name": "Mia Hall",
        "role": "Cybersecurity Analyst",
        "image": "https://randomuser.me/api/portraits/women/5.jpg",
        "alt": "Profile picture of Sophia Wilson",
        "age": 48,
        "location": "Phoenix"
      },
      {
        "id": 6,
        "name": "Charlotte Young",
        "role": "Product Manager",
        "image": "https://randomuser.me/api/portraits/men/6.jpg",
        "alt": "Profile picture of James Anderson",
        "age": 46,
        "location": "Dallas"
      },
      {
        "id": 7,
        "name": "Olivia Martin",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/women/7.jpg",
        "alt": "Profile picture of Olivia Martin",
        "age": 23,
        "location": "Miami"
      },
      {
        "id": 8,
        "name": "Lucas Wright",
        "role": "UI/UX Designer",
        "image": "https://randomuser.me/api/portraits/men/8.jpg",
        "alt": "Profile picture of William Davis",
        "age": 35,
        "location": "Seattle"
      },
      {
        "id": 9,
        "name": "Alexander Lewis",
        "role": "Business Consultant",
        "image": "https://randomuser.me/api/portraits/women/9.jpg",
        "alt": "Profile picture of Emily White",
        "age": 60,
        "location": "Phoenix"
      },
      {
        "id": 10,
        "name": "Sophia Wilson",
        "role": "Software Engineer",
        "image": "https://randomuser.me/api/portraits/men/10.jpg",
        "alt": "Profile picture of Daniel Thomas",
        "age": 55,
        "location": "Los Angeles"
      },
      {
        "id": 11,
        "name": "Ethan Allen",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/women/11.jpg",
        "alt": "Profile picture of Isabella Scott",
        "age": 35,
        "location": "Phoenix"
      },
      {
        "id": 12,
        "name": "Emma Brown",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/men/12.jpg",
        "alt": "Profile picture of Alexander Lewis",
        "age": 32,
        "location": "Philadelphia"
      },
      {
        "id": 13,
        "name": "John Doe",
        "role": "Finance Analyst",
        "image": "https://randomuser.me/api/portraits/women/13.jpg",
        "alt": "Profile picture of Mia Hall",
        "age": 59,
        "location": "Chicago"
      },
      {
        "id": 14,
        "name": "John Doe",
        "role": "Business Consultant",
        "image": "https://randomuser.me/api/portraits/men/14.jpg",
        "alt": "Profile picture of Ethan Allen",
        "age": 46,
        "location": "Philadelphia"
      },
      {
        "id": 15,
        "name": "Benjamin Hernandez",
        "role": "DevOps Engineer",
        "image": "https://randomuser.me/api/portraits/women/15.jpg",
        "alt": "Profile picture of Charlotte Young",
        "age": 35,
        "location": "Seattle"
      },
      {
        "id": 16,
        "name": "James Anderson",
        "role": "Business Consultant",
        "image": "https://randomuser.me/api/portraits/men/16.jpg",
        "alt": "Profile picture of Benjamin Hernandez",
        "age": 42,
        "location": "Miami"
      },
      {
        "id": 17,
        "name": "Daniel Thomas",
        "role": "Cybersecurity Analyst",
        "image": "https://randomuser.me/api/portraits/women/17.jpg",
        "alt": "Profile picture of Amelia King",
        "age": 37,
        "location": "Houston"
      },
      {
        "id": 18,
        "name": "Emma Brown",
        "role": "Cybersecurity Analyst",
        "image": "https://randomuser.me/api/portraits/men/18.jpg",
        "alt": "Profile picture of Lucas Wright",
        "age": 46,
        "location": "San Francisco"
      },
      {
        "id": 19,
        "name": "Mia Hall",
        "role": "UI/UX Designer",
        "image": "https://randomuser.me/api/portraits/women/19.jpg",
        "alt": "Profile picture of Harper Lopez",
        "age": 60,
        "location": "Philadelphia"
      },
      {
        "id": 20,
        "name": "Sophia Wilson",
        "role": "Data Scientist",
        "image": "https://randomuser.me/api/portraits/men/20.jpg",
        "alt": "Profile picture of John Doe",
        "age": 44,
        "location": "Dallas"
      },
      {
        "id": 21,
        "name": "Emily White",
        "role": "UI/UX Designer",
        "image": "https://randomuser.me/api/portraits/women/21.jpg",
        "alt": "Profile picture of Jane Smith",
        "age": 37,
        "location": "Seattle"
      },
      {
        "id": 22,
        "name": "Emily White",
        "role": "DevOps Engineer",
        "image": "https://randomuser.me/api/portraits/men/22.jpg",
        "alt": "Profile picture of David Johnson",
        "age": 53,
        "location": "New York"
      },
      {
        "id": 23,
        "name": "Mia Hall",
        "role": "Cybersecurity Analyst",
        "image": "https://randomuser.me/api/portraits/women/23.jpg",
        "alt": "Profile picture of Emma Brown",
        "age": 55,
        "location": "Dallas"
      },
      {
        "id": 24,
        "name": "William Davis",
        "role": "Marketing Manager",
        "image": "https://randomuser.me/api/portraits/men/24.jpg",
        "alt": "Profile picture of Michael Lee",
        "age": 43,
        "location": "Los Angeles"
      },
      {
        "id": 25,
        "name": "Sophia Wilson",
        "role": "UI/UX Designer",
        "image": "https://randomuser.me/api/portraits/women/25.jpg",
        "alt": "Profile picture of Sophia Wilson",
        "age": 52,
        "location": "Philadelphia"
      },
      {
        "id": 26,
        "name": "Sophia Wilson",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/men/26.jpg",
        "alt": "Profile picture of James Anderson",
        "age": 51,
        "location": "Chicago"
      },
      {
        "id": 27,
        "name": "Emma Brown",
        "role": "Data Scientist",
        "image": "https://randomuser.me/api/portraits/women/27.jpg",
        "alt": "Profile picture of Olivia Martin",
        "age": 51,
        "location": "Denver"
      },
      {
        "id": 28,
        "name": "Amelia King",
        "role": "Product Manager",
        "image": "https://randomuser.me/api/portraits/men/28.jpg",
        "alt": "Profile picture of William Davis",
        "age": 23,
        "location": "Philadelphia"
      },
      {
        "id": 29,
        "name": "Isabella Scott",
        "role": "Data Scientist",
        "image": "https://randomuser.me/api/portraits/women/29.jpg",
        "alt": "Profile picture of Emily White",
        "age": 60,
        "location": "New York"
      },
      {
        "id": 30,
        "name": "Benjamin Hernandez",
        "role": "Product Manager",
        "image": "https://randomuser.me/api/portraits/men/30.jpg",
        "alt": "Profile picture of Daniel Thomas",
        "age": 33,
        "location": "Phoenix"
      },
      {
        "id": 31,
        "name": "James Anderson",
        "role": "Data Scientist",
        "image": "https://randomuser.me/api/portraits/women/31.jpg",
        "alt": "Profile picture of Isabella Scott",
        "age": 32,
        "location": "Austin"
      },
      {
        "id": 32,
        "name": "Emily White",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/men/32.jpg",
        "alt": "Profile picture of Alexander Lewis",
        "age": 52,
        "location": "Seattle"
      },
      {
        "id": 33,
        "name": "Mia Hall",
        "role": "Finance Analyst",
        "image": "https://randomuser.me/api/portraits/women/33.jpg",
        "alt": "Profile picture of Mia Hall",
        "age": 41,
        "location": "Los Angeles"
      },
      {
        "id": 34,
        "name": "Mia Hall",
        "role": "Business Consultant",
        "image": "https://randomuser.me/api/portraits/men/34.jpg",
        "alt": "Profile picture of Ethan Allen",
        "age": 29,
        "location": "San Francisco"
      },
      {
        "id": 35,
        "name": "Alexander Lewis",
        "role": "Data Scientist",
        "image": "https://randomuser.me/api/portraits/women/35.jpg",
        "alt": "Profile picture of Charlotte Young",
        "age": 56,
        "location": "Dallas"
      },
      {
        "id": 36,
        "name": "John Doe",
        "role": "UI/UX Designer",
        "image": "https://randomuser.me/api/portraits/men/36.jpg",
        "alt": "Profile picture of Benjamin Hernandez",
        "age": 41,
        "location": "San Diego"
      },
      {
        "id": 37,
        "name": "Emily White",
        "role": "Data Scientist",
        "image": "https://randomuser.me/api/portraits/women/37.jpg",
        "alt": "Profile picture of Amelia King",
        "age": 34,
        "location": "Boston"
      },
      {
        "id": 38,
        "name": "Ethan Allen",
        "role": "Business Consultant",
        "image": "https://randomuser.me/api/portraits/men/38.jpg",
        "alt": "Profile picture of Lucas Wright",
        "age": 23,
        "location": "Dallas"
      },
      {
        "id": 39,
        "name": "Emily White",
        "role": "Software Engineer",
        "image": "https://randomuser.me/api/portraits/women/39.jpg",
        "alt": "Profile picture of Harper Lopez",
        "age": 58,
        "location": "Atlanta"
      },
      {
        "id": 40,
        "name": "Emma Brown",
        "role": "Product Manager",
        "image": "https://randomuser.me/api/portraits/men/40.jpg",
        "alt": "Profile picture of John Doe",
        "age": 37,
        "location": "Los Angeles"
      },
      {
        "id": 41,
        "name": "Benjamin Hernandez",
        "role": "DevOps Engineer",
        "image": "https://randomuser.me/api/portraits/women/41.jpg",
        "alt": "Profile picture of Jane Smith",
        "age": 29,
        "location": "Denver"
      },
      {
        "id": 42,
        "name": "William Davis",
        "role": "Finance Analyst",
        "image": "https://randomuser.me/api/portraits/men/42.jpg",
        "alt": "Profile picture of David Johnson",
        "age": 29,
        "location": "Denver"
      },
      {
        "id": 43,
        "name": "Daniel Thomas",
        "role": "Data Scientist",
        "image": "https://randomuser.me/api/portraits/women/43.jpg",
        "alt": "Profile picture of Emma Brown",
        "age": 55,
        "location": "Philadelphia"
      },
      {
        "id": 44,
        "name": "William Davis",
        "role": "Finance Analyst",
        "image": "https://randomuser.me/api/portraits/men/44.jpg",
        "alt": "Profile picture of Michael Lee",
        "age": 42,
        "location": "Austin"
      },
      {
        "id": 45,
        "name": "Michael Lee",
        "role": "Software Engineer",
        "image": "https://randomuser.me/api/portraits/women/45.jpg",
        "alt": "Profile picture of Sophia Wilson",
        "age": 57,
        "location": "Philadelphia"
      },
      {
        "id": 46,
        "name": "John Doe",
        "role": "Product Manager",
        "image": "https://randomuser.me/api/portraits/men/46.jpg",
        "alt": "Profile picture of James Anderson",
        "age": 24,
        "location": "Houston"
      },
      {
        "id": 47,
        "name": "Emma Brown",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/women/47.jpg",
        "alt": "Profile picture of Olivia Martin",
        "age": 37,
        "location": "Philadelphia"
      },
      {
        "id": 48,
        "name": "Ethan Allen",
        "role": "Data Scientist",
        "image": "https://randomuser.me/api/portraits/men/48.jpg",
        "alt": "Profile picture of William Davis",
        "age": 39,
        "location": "Houston"
      },
      {
        "id": 49,
        "name": "Lucas Wright",
        "role": "Cybersecurity Analyst",
        "image": "https://randomuser.me/api/portraits/women/49.jpg",
        "alt": "Profile picture of Emily White",
        "age": 46,
        "location": "Chicago"
      },
      {
        "id": 50,
        "name": "John Doe",
        "role": "UI/UX Designer",
        "image": "https://randomuser.me/api/portraits/men/50.jpg",
        "alt": "Profile picture of Daniel Thomas",
        "age": 52,
        "location": "Boston"
      },
      {
        "id": 51,
        "name": "David Johnson",
        "role": "Software Engineer",
        "image": "https://randomuser.me/api/portraits/women/51.jpg",
        "alt": "Profile picture of Isabella Scott",
        "age": 35,
        "location": "Miami"
      },
      {
        "id": 52,
        "name": "James Anderson",
        "role": "UI/UX Designer",
        "image": "https://randomuser.me/api/portraits/men/52.jpg",
        "alt": "Profile picture of Alexander Lewis",
        "age": 29,
        "location": "Miami"
      },
      {
        "id": 53,
        "name": "Mia Hall",
        "role": "Finance Analyst",
        "image": "https://randomuser.me/api/portraits/women/53.jpg",
        "alt": "Profile picture of Mia Hall",
        "age": 44,
        "location": "San Francisco"
      },
      {
        "id": 54,
        "name": "David Johnson",
        "role": "UI/UX Designer",
        "image": "https://randomuser.me/api/portraits/men/54.jpg",
        "alt": "Profile picture of Ethan Allen",
        "age": 22,
        "location": "Seattle"
      },
      {
        "id": 55,
        "name": "Sophia Wilson",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/women/55.jpg",
        "alt": "Profile picture of Charlotte Young",
        "age": 33,
        "location": "Miami"
      },
      {
        "id": 56,
        "name": "David Johnson",
        "role": "Business Consultant",
        "image": "https://randomuser.me/api/portraits/men/56.jpg",
        "alt": "Profile picture of Benjamin Hernandez",
        "age": 54,
        "location": "Seattle"
      },
      {
        "id": 57,
        "name": "John Doe",
        "role": "UI/UX Designer",
        "image": "https://randomuser.me/api/portraits/women/57.jpg",
        "alt": "Profile picture of Amelia King",
        "age": 50,
        "location": "Phoenix"
      },
      {
        "id": 58,
        "name": "Benjamin Hernandez",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/men/58.jpg",
        "alt": "Profile picture of Lucas Wright",
        "age": 30,
        "location": "Phoenix"
      },
      {
        "id": 59,
        "name": "Amelia King",
        "role": "Product Manager",
        "image": "https://randomuser.me/api/portraits/women/59.jpg",
        "alt": "Profile picture of Harper Lopez",
        "age": 36,
        "location": "Atlanta"
      },
      {
        "id": 60,
        "name": "John Doe",
        "role": "Marketing Manager",
        "image": "https://randomuser.me/api/portraits/men/60.jpg",
        "alt": "Profile picture of John Doe",
        "age": 44,
        "location": "Denver"
      },
      {
        "id": 61,
        "name": "Lucas Wright",
        "role": "Cybersecurity Analyst",
        "image": "https://randomuser.me/api/portraits/women/61.jpg",
        "alt": "Profile picture of Jane Smith",
        "age": 46,
        "location": "Phoenix"
      },
      {
        "id": 62,
        "name": "Isabella Scott",
        "role": "UI/UX Designer",
        "image": "https://randomuser.me/api/portraits/men/62.jpg",
        "alt": "Profile picture of David Johnson",
        "age": 60,
        "location": "San Diego"
      },
      {
        "id": 63,
        "name": "Olivia Martin",
        "role": "DevOps Engineer",
        "image": "https://randomuser.me/api/portraits/women/63.jpg",
        "alt": "Profile picture of Emma Brown",
        "age": 34,
        "location": "Houston"
      },
      {
        "id": 64,
        "name": "Charlotte Young",
        "role": "Cybersecurity Analyst",
        "image": "https://randomuser.me/api/portraits/men/64.jpg",
        "alt": "Profile picture of Michael Lee",
        "age": 34,
        "location": "San Diego"
      },
      {
        "id": 65,
        "name": "James Anderson",
        "role": "Software Engineer",
        "image": "https://randomuser.me/api/portraits/women/65.jpg",
        "alt": "Profile picture of Sophia Wilson",
        "age": 37,
        "location": "San Diego"
      },
      {
        "id": 66,
        "name": "Alexander Lewis",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/men/66.jpg",
        "alt": "Profile picture of James Anderson",
        "age": 24,
        "location": "Houston"
      },
      {
        "id": 67,
        "name": "Isabella Scott",
        "role": "Marketing Manager",
        "image": "https://randomuser.me/api/portraits/women/67.jpg",
        "alt": "Profile picture of Olivia Martin",
        "age": 53,
        "location": "Seattle"
      },
      {
        "id": 68,
        "name": "Ethan Allen",
        "role": "Software Engineer",
        "image": "https://randomuser.me/api/portraits/men/68.jpg",
        "alt": "Profile picture of William Davis",
        "age": 59,
        "location": "Houston"
      },
      {
        "id": 69,
        "name": "Mia Hall",
        "role": "Finance Analyst",
        "image": "https://randomuser.me/api/portraits/women/69.jpg",
        "alt": "Profile picture of Emily White",
        "age": 39,
        "location": "Denver"
      },
      {
        "id": 70,
        "name": "James Anderson",
        "role": "Software Engineer",
        "image": "https://randomuser.me/api/portraits/men/70.jpg",
        "alt": "Profile picture of Daniel Thomas",
        "age": 28,
        "location": "Philadelphia"
      },
      {
        "id": 71,
        "name": "Ethan Allen",
        "role": "Business Consultant",
        "image": "https://randomuser.me/api/portraits/women/71.jpg",
        "alt": "Profile picture of Isabella Scott",
        "age": 45,
        "location": "Philadelphia"
      },
      {
        "id": 72,
        "name": "Lucas Wright",
        "role": "DevOps Engineer",
        "image": "https://randomuser.me/api/portraits/men/72.jpg",
        "alt": "Profile picture of Alexander Lewis",
        "age": 23,
        "location": "San Francisco"
      },
      {
        "id": 73,
        "name": "Mia Hall",
        "role": "DevOps Engineer",
        "image": "https://randomuser.me/api/portraits/women/73.jpg",
        "alt": "Profile picture of Mia Hall",
        "age": 56,
        "location": "Boston"
      },
      {
        "id": 74,
        "name": "Emma Brown",
        "role": "Marketing Manager",
        "image": "https://randomuser.me/api/portraits/men/74.jpg",
        "alt": "Profile picture of Ethan Allen",
        "age": 50,
        "location": "New York"
      },
      {
        "id": 75,
        "name": "Lucas Wright",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/women/75.jpg",
        "alt": "Profile picture of Charlotte Young",
        "age": 26,
        "location": "Austin"
      },
      {
        "id": 76,
        "name": "Lucas Wright",
        "role": "Marketing Manager",
        "image": "https://randomuser.me/api/portraits/men/76.jpg",
        "alt": "Profile picture of Benjamin Hernandez",
        "age": 40,
        "location": "Miami"
      },
      {
        "id": 77,
        "name": "James Anderson",
        "role": "Cybersecurity Analyst",
        "image": "https://randomuser.me/api/portraits/women/77.jpg",
        "alt": "Profile picture of Amelia King",
        "age": 25,
        "location": "Chicago"
      },
      {
        "id": 78,
        "name": "Daniel Thomas",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/men/78.jpg",
        "alt": "Profile picture of Lucas Wright",
        "age": 55,
        "location": "Miami"
      },
      {
        "id": 79,
        "name": "Emma Brown",
        "role": "Marketing Manager",
        "image": "https://randomuser.me/api/portraits/women/79.jpg",
        "alt": "Profile picture of Harper Lopez",
        "age": 49,
        "location": "San Francisco"
      },
      {
        "id": 80,
        "name": "James Anderson",
        "role": "Marketing Manager",
        "image": "https://randomuser.me/api/portraits/men/80.jpg",
        "alt": "Profile picture of John Doe",
        "age": 46,
        "location": "San Francisco"
      },
      {
        "id": 81,
        "name": "Daniel Thomas",
        "role": "Software Engineer",
        "image": "https://randomuser.me/api/portraits/women/81.jpg",
        "alt": "Profile picture of Jane Smith",
        "age": 25,
        "location": "Dallas"
      },
      {
        "id": 82,
        "name": "Jane Smith",
        "role": "Finance Analyst",
        "image": "https://randomuser.me/api/portraits/men/82.jpg",
        "alt": "Profile picture of David Johnson",
        "age": 54,
        "location": "Atlanta"
      },
      {
        "id": 83,
        "name": "Isabella Scott",
        "role": "Cybersecurity Analyst",
        "image": "https://randomuser.me/api/portraits/women/83.jpg",
        "alt": "Profile picture of Emma Brown",
        "age": 31,
        "location": "Phoenix"
      },
      {
        "id": 84,
        "name": "Harper Lopez",
        "role": "DevOps Engineer",
        "image": "https://randomuser.me/api/portraits/men/84.jpg",
        "alt": "Profile picture of Michael Lee",
        "age": 39,
        "location": "Chicago"
      },
      {
        "id": 85,
        "name": "Alexander Lewis",
        "role": "Business Consultant",
        "image": "https://randomuser.me/api/portraits/women/85.jpg",
        "alt": "Profile picture of Sophia Wilson",
        "age": 26,
        "location": "Dallas"
      },
      {
        "id": 86,
        "name": "Alexander Lewis",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/men/86.jpg",
        "alt": "Profile picture of James Anderson",
        "age": 35,
        "location": "San Diego"
      },
      {
        "id": 87,
        "name": "Alexander Lewis",
        "role": "UI/UX Designer",
        "image": "https://randomuser.me/api/portraits/women/87.jpg",
        "alt": "Profile picture of Olivia Martin",
        "age": 28,
        "location": "Houston"
      },
      {
        "id": 88,
        "name": "Mia Hall",
        "role": "Product Manager",
        "image": "https://randomuser.me/api/portraits/men/88.jpg",
        "alt": "Profile picture of William Davis",
        "age": 48,
        "location": "New York"
      },
      {
        "id": 89,
        "name": "Olivia Martin",
        "role": "Finance Analyst",
        "image": "https://randomuser.me/api/portraits/women/89.jpg",
        "alt": "Profile picture of Emily White",
        "age": 57,
        "location": "Seattle"
      },
      {
        "id": 90,
        "name": "Jane Smith",
        "role": "Software Engineer",
        "image": "https://randomuser.me/api/portraits/men/90.jpg",
        "alt": "Profile picture of Daniel Thomas",
        "age": 25,
        "location": "New York"
      },
      {
        "id": 91,
        "name": "Olivia Martin",
        "role": "DevOps Engineer",
        "image": "https://randomuser.me/api/portraits/women/91.jpg",
        "alt": "Profile picture of Isabella Scott",
        "age": 22,
        "location": "Boston"
      },
      {
        "id": 92,
        "name": "Lucas Wright",
        "role": "DevOps Engineer",
        "image": "https://randomuser.me/api/portraits/men/92.jpg",
        "alt": "Profile picture of Alexander Lewis",
        "age": 26,
        "location": "Seattle"
      },
      {
        "id": 93,
        "name": "Sophia Wilson",
        "role": "Software Engineer",
        "image": "https://randomuser.me/api/portraits/women/93.jpg",
        "alt": "Profile picture of Mia Hall",
        "age": 49,
        "location": "New York"
      },
      {
        "id": 94,
        "name": "Olivia Martin",
        "role": "Business Consultant",
        "image": "https://randomuser.me/api/portraits/men/94.jpg",
        "alt": "Profile picture of Ethan Allen",
        "age": 58,
        "location": "Los Angeles"
      },
      {
        "id": 95,
        "name": "Charlotte Young",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/women/95.jpg",
        "alt": "Profile picture of Charlotte Young",
        "age": 26,
        "location": "Boston"
      },
      {
        "id": 96,
        "name": "Sophia Wilson",
        "role": "Business Consultant",
        "image": "https://randomuser.me/api/portraits/men/96.jpg",
        "alt": "Profile picture of Benjamin Hernandez",
        "age": 32,
        "location": "San Diego"
      },
      {
        "id": 97,
        "name": "Jane Smith",
        "role": "Finance Analyst",
        "image": "https://randomuser.me/api/portraits/women/97.jpg",
        "alt": "Profile picture of Amelia King",
        "age": 56,
        "location": "San Francisco"
      },
      {
        "id": 98,
        "name": "William Davis",
        "role": "Marketing Manager",
        "image": "https://randomuser.me/api/portraits/men/98.jpg",
        "alt": "Profile picture of Lucas Wright",
        "age": 59,
        "location": "Los Angeles"
      },
      {
        "id": 99,
        "name": "Isabella Scott",
        "role": "HR Specialist",
        "image": "https://randomuser.me/api/portraits/women/99.jpg",
        "alt": "Profile picture of Harper Lopez",
        "age": 33,
        "location": "Austin"
      },
      {
        "id": 100,
        "name": "William Davis",
        "role": "DevOps Engineer",
        "image": "https://randomuser.me/api/portraits/men/0.jpg",
        "alt": "Profile picture of John Doe",
        "age": 52,
        "location": "Boston"
      },
      {
        id: 1,
        name: 'John Doe',
        role: 'Software Engineer',
        image: '../../assets/profiles/profile1.jpg',
        alt: 'Profile 2',
        age: 26,
        location: 'San Francisco',
      },
      {
        id: 2,
        name: 'Jane Smith',
        role: 'Product Manager',
        image: '../../assets/profiles/profile2.jpg',
        alt: 'Profile 2',
        age: 26,
        location: 'San Francisco',
      },
      {
        id: 3,
        name: 'Alice Johnson',
        role: 'UI/UX Designer',
        image: '../../assets/profiles/profile3.jpg',
        alt: 'Profile 2',
        age: 26,
        location: 'San Francisco',
      },
      {
        id: 4,
        role: 'UI/UX Designer',
        image: 'assets/profiles/profile2.jpg',
        alt: 'Profile 1',
        age: 24,
        location: 'New York',
        name: 'John Doe'
      },
      {
        id: 5,
        role: 'UI/UX Designer',
        image: 'assets/profiles/profile3.jpg',
        alt: 'Profile 2',
        age: 26,
        location: 'San Francisco',
        name: 'Jane Smith'
      },
      {
        id: 6,
        role: 'UI/UX Designer',
        image: 'assets/profiles/profile2.png',
        alt: 'Profile 3',
        age: 30,
        location: 'Chicago',
        name: 'Raj Patel'
      },
      {
        id: 7,
        role: 'UI/UX Designer',
        image: 'assets/profiles/profile10.jpg',
        alt: 'Profile 2',
        age: 26,
        location: 'San Francisco',
        name: 'Ayush Smith'
      },
      {
        id: 8,
        role: 'UI/UX Designer',
        image: 'assets/profiles/profile11.jpg',
        alt: 'Profile 3',
        age: 30,
        location: 'Chicago',
        name: 'Raja Khan'
      },
      {
        id: 9,
        role: 'UI/UX Designer',
        image: 'assets/profiles/profile13.jpg',
        alt: 'Profile 2',
        age: 26,
        location: 'San Francisco',
        name: 'Ayush Smith'
      },
      {
        id: 10,
        role: 'UI/UX Designer',
        image: 'assets/profiles/profile14.jpg',
        alt: 'Profile 3',
        age: 30,
        location: 'Chicago',
        name: 'Raja Khan'
      }
    ];
  }
}
