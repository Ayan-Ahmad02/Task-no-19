@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");


:root{
    --primary:#4f46e5;
    --primary-light:#d8d4ff;

    --success:#2e7d32;
    --success-bg:#e8f8e8;

    --danger:#e63946;
    --danger-bg:#fdecec;

    --text:#333;
    --text-light:#666;

    --white:#fff;
    --border:#e5e7eb;
    --bg:#f5f7fb;

    --shadow:0 3px 10px rgba(0,0,0,.08);
    --radius:12px;
}



*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:"Poppins",sans-serif;
}

body{
    background:var(--bg);
    color:var(--text);
}

a{
    text-decoration:none;
    color:inherit;
}

button{
    cursor:pointer;
    border:none;
    transition:.3s;
}



.navbar{
    position:sticky;
    top:0;
    z-index:100;

    display:flex;
    justify-content:space-between;
    align-items:center;

    height:70px;
    padding:0 60px;

    background:var(--white);
    box-shadow:var(--shadow);
}

.logo h2{
    font-size:28px;
    font-weight:600;
}

.nav-links{
    display:flex;
    gap:35px;
}

.nav-links a{
    color:var(--text-light);
    font-weight:500;
}

.nav-links a:hover{
    color:var(--primary);
}



.user-section{
    display:flex;
    align-items:center;
}

.username{
    padding:8px 15px;
    background:#eaf4ff;
    color:#2196f3;
    font-size:14px;
    font-weight:600;
    border-radius:10px 0 0 10px;
}

.logout-btn{
    width:42px;
    height:38px;
    color:#fff;
    background:#dc2626;
    border-radius:0 10px 10px 0;
}

.logout-btn:hover{
    background:#b91c1c;
}



.container{
    max-width:1300px;
    margin:40px auto;
    padding:0 20px;

    display:flex;
    gap:25px;
}

.left-section,
.right-section{
    flex:1;
}



.added-items,
.booking-form,
.right-section{
    background:var(--white);
    border-radius:var(--radius);
    box-shadow:var(--shadow);
}



.added-items{
    padding:20px;
    margin-bottom:25px;
}

.added-items h2{
    text-align:center;
    margin-bottom:20px;
}

table{
    width:100%;
    border-collapse:collapse;
}

th{
    padding:12px;
    background:#f3f4f6;
    color:#555;
}

td{
    padding:12px;
    text-align:center;
    border-bottom:1px solid #eee;
}



.empty-cart{
    padding:40px 10px;
    text-align:center;
    color:#888;
}

.empty-cart i{
    display:block;
    margin-bottom:12px;
    font-size:45px;
    color:#666;
}

.empty-cart p{
    margin:10px 0;
    font-size:20px;
    font-weight:600;
}

.empty-cart small{
    color:#999;
}



.total{
    display:flex;
    justify-content:space-between;
    align-items:center;

    margin-top:20px;
    padding-top:15px;

    border-top:2px solid #eee;
}

#total-price{
    color:var(--primary);
    font-size:22px;
    font-weight:700;
}



.booking-form{
    padding:20px;
}

.booking-form h3{
    margin-bottom:20px;
}

.booking-form label{
    display:block;
    margin-bottom:8px;
    font-weight:500;
}

.booking-form input{
    width:100%;
    padding:12px;

    margin-bottom:15px;

    border:1px solid #ddd;
    border-radius:8px;
    outline:none;
}

.booking-form input:focus{
    border-color:var(--primary);
}

.input-group{
    display:flex;
    gap:15px;
}

.input-box{
    flex:1;
}

.booking-form button{
    width:100%;
    padding:14px;

    border-radius:8px;

    background:var(--primary-light);
    color:#fff;
    font-size:16px;
    font-weight:600;
}

.booking-form button:hover{
    background:var(--primary);
}



.right-section{
    padding:25px;
}

.right-section h2{
    font-size:30px;
    color:#374151;
}

.right-section p{
    margin:10px 0 20px;
    color:#6b7280;
}

.services-container{
    width:100%;
}

.service-card{
    padding:20px 0;
    border-top:1px solid var(--border);
    border-bottom:1px solid var(--border);
}

.service-card img{
    display:block;
    width:100%;
    max-width:320px;
    height:220px;
    margin:auto;
    object-fit:contain;
}


.service-info{
    display:flex;
    justify-content:space-between;
    align-items:center;

    margin-bottom:20px;
}

.service-info h3{
    font-size:20px;
}

.service-info h2{
    color:var(--primary);
    font-size:26px;
}


.btn-group{
    display:flex;
    gap:15px;
    margin-top:20px;
}

.skip-btn,
.add-btn{
    flex:1;

    height:50px;

    display:flex;
    justify-content:center;
    align-items:center;
    gap:8px;

    border-radius:8px;

    font-size:16px;
    font-weight:600;
}

.skip-btn{
    background:var(--danger-bg);
    color:var(--danger);
}

.skip-btn:hover{
    background:#f8d7da;
}

.add-btn{
    background:var(--success-bg);
    color:var(--success);
}

.add-btn:hover{
    background:#d4edda;
}



.cart-info{
    margin-top:40px;
    font-size:16px;
    font-weight:500;
}


@media (max-width:992px){

    .navbar{
        padding:0 20px;
    }

    .container{
        flex-direction:column;
    }

    .nav-links{
        gap:20px;
    }
}

@media (max-width:768px){

    .navbar{
        flex-direction:column;
        justify-content:center;
        height:auto;
        gap:15px;
        padding:20px;
    }

    .nav-links{
        flex-wrap:wrap;
        justify-content:center;
    }

    .input-group{
        flex-direction:column;
    }

    .service-info{
        flex-direction:column;
        text-align:center;
        gap:10px;
    }

    .btn-group{
        flex-direction:column;
    }

    table{
        font-size:14px;
    }
}

@media (max-width:480px){

    .logo h2{
        font-size:22px;
    }

    .right-section h2{
        font-size:24px;
    }

    .empty-cart p{
        font-size:18px;
    }

    .service-card img{
        height:180px;
    }
}
