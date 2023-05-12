<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Page d'accueil - Cinéma La Rotonde Etampes</title>
  <style>
    /* Styles pour le header */
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0;
      background-color: #F5A623;
    }
    nav {
      margin-top: 20px;
    }
    ul {
      display: flex;
      justify-content: space-around;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      margin: 0 20px;
    }
    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
    h1 {
      margin-top: 50px;
      font-size: 48px;
      text-align: center;
      color: white;
    }
    p {
      margin: 20px 0;
      font-size: 24px;
      text-align: center;
      color: white;
    }

    /* Styles pour les sections */
    main {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 50px;
    }
    section {
      flex: 1 1 300px;
      margin: 20px;
    }
    .section-title {
      font-size: 36px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
    .section-content {
      font-size: 18px;
      line-height: 1.5;
      text-align: justify;
    }

    /* Styles pour le footer */
    footer {
      background-color: #333333;
      color: white;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header>
    <h1>Cinéma La Rotonde Etampes</h1>
    <nav>
      <ul>
        <li><a href="#">Programme</a></li>
        <li><a href="#">Tarifs</a></li>
        <li><a href="#">Événements</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main content -->
  <main>
    <section>
      <h2 class="section-title">Programme de la semaine</h2>
      <div class="section-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur sapien enim, nec sagittis mi suscipit eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas pellentesque augue in elit vulputate, vitae rhoncus nunc imperdiet. Fusce ac risus lectus. Donec laoreet malesuada leo eu luctus. Praesent sed tellus eu nulla efficitur ullamcorper. Suspendisse ac sem at orci auctor faucibus nec in mi.</p>
      </div>
    </section>
    <section>
      <h2 class="section-title">Tarifs</h2>
      <div class="section-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur sapien enim
