--
-- Base de données :  `mydb`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `USER_id` int(11) NOT NULL AUTO_INCREMENT,
  `USER_Nom` varchar(255) DEFAULT NULL,
  `USER_prenom` varchar(255) DEFAULT NULL,
  `USER_Email` varchar(255) NOT NULL,
  `USER_password` varchar(550) NOT NULL,
  PRIMARY KEY (`USER_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

