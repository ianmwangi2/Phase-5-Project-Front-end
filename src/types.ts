export interface HomeDetails {
    id: number;
    name: string;
    location: string;
    image: string;
    children: number;
    description: string;
    needs: {
      category: string;
      details: string;
    }[];
    visitingHours: {
      [key: string]: string;
    };
    established: string;
    successStories: number;
    contact: {
      phone: string;
      email: string;
    };
  }
  
  export const homesData: HomeDetails[] = [
    {
      id: 1,
      name: "Sunshine Children's Home",
      location: "Nairobi, Kenya",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DdqIuLlDot4S96siL5_athdOP7xL7JRsGg&s",
      children: 45,
      description: "Sunshine Children's Home has been providing care and support to orphaned and vulnerable children since 1995. Our mission is to create a nurturing environment where every child can thrive and reach their full potential through education, healthcare, and emotional support.",
      needs: [
        {
          category: "Educational Supplies",
          details: "Books, stationery, and school uniforms"
        },
        {
          category: "Medical Supplies",
          details: "First aid kits and basic medications"
        },
        {
          category: "Food Supplies",
          details: "Non-perishable foods and fresh produce"
        },
        {
          category: "Clothing",
          details: "Children's clothing and shoes"
        }
      ],
      visitingHours: {
        "Monday-Friday": "9:00 AM - 5:00 PM",
        "Saturday": "10:00 AM - 4:00 PM",
        "Sunday": "12:00 PM - 4:00 PM"
      },
      established: "1995",
      successStories: 250,
      contact: {
        phone: "+254 20 123 4567",
        email: "info@sunshinehome.org"
      }
    },
    {
      id: 2,
      name: "Hope Haven Orphanage",
      location: "Mombasa, Kenya",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZaeOoQsm-4tF9X5Z5uJgzcAxXW7MxHRGuw&s",
      children: 32,
      description: "Hope Haven Orphanage is dedicated to providing a safe and loving home for children in need. We focus on holistic development, including education, healthcare, and life skills training to prepare our children for a bright future.",
      needs: [
        {
          category: "Medical Supplies",
          details: "Medications and hygiene products"
        },
        {
          category: "Educational Materials",
          details: "Textbooks and learning aids"
        },
        {
          category: "Recreational Items",
          details: "Sports equipment and games"
        },
        {
          category: "Infrastructure",
          details: "Building maintenance and repairs"
        }
      ],
      visitingHours: {
        "Monday-Friday": "10:00 AM - 4:00 PM",
        "Saturday": "11:00 AM - 3:00 PM",
        "Sunday": "Closed"
      },
      established: "2001",
      successStories: 180,
      contact: {
        phone: "+254 41 234 5678",
        email: "contact@hopehaven.org"
      }
    },
    {
      id: 3,
      name: "Grace Children's Center",
      location: "Kisumu, Kenya",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2eiSRDNL9Inr8pSD_EHYaf7AxvPgiDu3Hg&s",
      children: 28,
      description: "Grace Children's Center believes in nurturing both the mind and spirit of every child. We provide quality education, healthcare, and emotional support while maintaining strong connections with the local community.",
      needs: [
        {
          category: "Food Supplies",
          details: "Monthly food supplies and fresh produce"
        },
        {
          category: "School Supplies",
          details: "Educational materials and uniforms"
        },
        {
          category: "Healthcare",
          details: "Medical checkups and supplies"
        },
        {
          category: "Clothing",
          details: "Seasonal clothing and shoes"
        }
      ],
      visitingHours: {
        "Monday-Thursday": "9:00 AM - 4:00 PM",
        "Friday": "9:00 AM - 2:00 PM",
        "Saturday-Sunday": "By appointment only"
      },
      established: "2008",
      successStories: 120,
      contact: {
        phone: "+254 57 345 6789",
        email: "info@gracechildren.org"
      }
    },
    {
      id: 4,
      name: "Rainbow House",
      location: "Nakuru, Kenya",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYTqLHRLSAeC8WISUB7DdQrJqrRJRArVTzFw_zNW8Gh58TAsXd1mRWLyWKThIqQZbbKsM&usqp=CAU",
      children: 38,
      description: "Rainbow House specializes in providing care for children with special needs. Our dedicated team of caregivers and specialists ensures that each child receives personalized attention and support for their unique requirements.",
      needs: [
        {
          category: "Specialized Equipment",
          details: "Mobility aids and therapeutic equipment"
        },
        {
          category: "Medical Care",
          details: "Specialized medications and therapy supplies"
        },
        {
          category: "Educational Tools",
          details: "Special education materials and sensory toys"
        },
        {
          category: "Nutrition",
          details: "Special dietary requirements and supplements"
        }
      ],
      visitingHours: {
        "Monday-Friday": "9:00 AM - 3:00 PM",
        "Saturday": "10:00 AM - 2:00 PM",
        "Sunday": "By appointment only"
      },
      established: "2010",
      successStories: 95,
      contact: {
        phone: "+254 51 456 7890",
        email: "care@rainbowhouse.org"
      }
    },
    {
      id: 5,
      name: "Little Angels Haven",
      location: "Eldoret, Kenya",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EZqnvWQKEVGYgyle0aBwwnYatdD7x94G3w&s",
      children: 25,
      description: "Little Angels Haven focuses on early childhood development and care for infants and toddlers. We provide a nurturing environment with specialized infant care programs and early education initiatives.",
      needs: [
        {
          category: "Infant Supplies",
          details: "Diapers, formula, and baby care items"
        },
        {
          category: "Early Learning Materials",
          details: "Age-appropriate toys and learning tools"
        },
        {
          category: "Healthcare",
          details: "Pediatric supplies and vaccinations"
        },
        {
          category: "Nutrition",
          details: "Baby food and nutritional supplements"
        }
      ],
      visitingHours: {
        "Monday-Friday": "10:00 AM - 4:00 PM",
        "Saturday": "10:00 AM - 1:00 PM",
        "Sunday": "Closed"
      },
      established: "2015",
      successStories: 75,
      contact: {
        phone: "+254 53 567 8901",
        email: "info@littleangels.org"
      }
    },
    {
      id: 6,
      name: "New Horizons Youth Center",
      location: "Thika, Kenya",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIwqQPPNW3NnibzMVNab-bt351UCSYjEL8Q&s",
      children: 42,
      description: "New Horizons Youth Center specializes in supporting teenagers and young adults. We focus on vocational training, life skills development, and preparation for independent living through comprehensive education and mentorship programs.",
      needs: [
        {
          category: "Vocational Equipment",
          details: "Tools and materials for skills training"
        },
        {
          category: "Technology",
          details: "Computers and educational software"
        },
        {
          category: "Sports Equipment",
          details: "Athletic gear and training equipment"
        },
        {
          category: "Career Development",
          details: "Professional attire and interview preparation materials"
        }
      ],
      visitingHours: {
        "Monday-Friday": "8:00 AM - 5:00 PM",
        "Saturday": "9:00 AM - 3:00 PM",
        "Sunday": "2:00 PM - 5:00 PM"
      },
      established: "2012",
      successStories: 150,
      contact: {
        phone: "+254 67 678 9012",
        email: "contact@newhorizons.org"
      }
    }
  ];