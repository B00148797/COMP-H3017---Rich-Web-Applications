-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           10.4.21-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Listage des données de la table just-eat.login : ~4 rows (environ)
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT IGNORE INTO `login` (`ID`, `Username`, `Password`, `PhoneNumber`, `Email`) VALUES
	(1, 'Manager', '8b2085f74dfa9c78a23b7d573c23d27d6d0b0e50c82a9b13138b193325be3814', '', ''),
	(2, 'Customer', 'bf3763383aaf43069885db20b386631c6d5d8b8481df2a26769e9de5fe2f9c82', '', ''),
	(3, 'Cook', '7f4a1e5bff2d56e523ee2a34e1c389956986008e506ca77fadf7047d71c6a63f', '', ''),
	(11, 'B00148797', 'ad823ca0ed3aa356d23df8e6e72f5206a903b6d700a54425324349f8fa326a86', '', 'B00148797@mytudublin.ie');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;

-- Listage des données de la table just-eat.products : ~4 rows (environ)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT IGNORE INTO `products` (`ID`, `Name`, `Description`, `Price`, `Image`, `Quantity`) VALUES
	(1, 'Whopper Sandwich', 'Our favourite burger. Our WHOPPER® Sandwich is a ¼ lb* of savory flame-grilled 100% Irish beef topped with juicy tomatoes, fresh cut lettuce, creamy mayonnaise, crunchy pickles, and sliced white onions on a soft sesame seed bun. *Based on pre-cooked patty weight.', 6.10, 'https://www.whopper.ie/wp-content/uploads/2021/04/20200225-1200x800-BK-ROI-AssetsProducts-TastyWhopper-2.png', 21),
	(3, 'Bacon King', 'Our Bacon King Sandwich features two savoury flame grilled 100% Irish beef burgers, topped with a hearty portion of bacon, melted cheese, and topped with ketchup, and creamy mayonnaise, all on a soft sesame seed bun.', 6.30, 'https://www.whopper.ie/wp-content/uploads/2021/05/20200225-1200x800-BK-ROI-AssetsProducts-BaconKing-1.png', 20),
	(4, 'Cheeseburger', 'Classic ingredients flavoured just right. Made from 100% Irish beef topped with a slice of melted cheese, pickles, ketchup and mustard all wrapped up in a sesame seed bun. If it aint broke, don\'t fix it.', 1.90, 'https://www.whopper.ie/wp-content/uploads/2021/04/Cheeseburger_hero-e1620903089578-1536x1007.png', 120),
	(5, 'Steakhouse', 'Get yourself down to the Steakhouse. A 100% flame-grilled 100% Irish beef patty topped with bacon, cheese, crispy onion, Western BBQ sauce, lettuce and tomato. Served in a corn dusted bun.', 6.70, 'https://www.whopper.ie/wp-content/uploads/2021/04/BB_STEAKHOUSE-v1_extra_cheese.png', 58),
	(6, 'Kids Hamburger', 'The burger blueprint. Our original burger. Scaled down. In size, not in taste.', 1.50, 'https://www.whopper.ie/wp-content/uploads/2021/04/18492_BK_Web_KIDSHAMBURGER_500x540px-1.png', 10),
	(7, 'King Junior', 'For your budding cowboys, we offer a menu adapted to their age.', 4.50, 'https://burgerkingfrance.twic.pics/img/menu/82e8ef2d-423c-4fcd-894f-cc11f8f3bff2_?twic=v1/contain=600x600', 13);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Listage des données de la table just-eat.purchaseorder : ~4 rows (environ)
/*!40000 ALTER TABLE `purchaseorder` DISABLE KEYS */;
INSERT IGNORE INTO `purchaseorder` (`ID`, `PriceOrder`, `DateTime`, `Description`) VALUES
	(28, 6.10, '2021-10-06 13:38:47', '1xWhopper Sandwich (6.10€)   '),
	(29, 9.50, '2021-10-06 13:38:53', '1xWhopper Sandwich (6.10€)   1xCheeseburger (1.90€)   1xKids Hamburger (1.50€)   '),
	(30, 18.80, '2021-10-06 13:57:49', '1xWhopper Sandwich (6.10€)   1xSteakhouse (6.70€)   1xKids Hamburger (1.50€)   1xKing Junior (4.50€)   '),
	(41, 6.10, '2021-10-21 17:20:14', '1xWhopper Sandwich (6.10€)   '),
	(42, 14.30, '2021-10-25 09:54:46', '1xWhopper Sandwich (6.10€)   1xSteakhouse (6.70€)   1xKids Hamburger (1.50€)   '),
	(48, 6.10, '2021-10-25 10:21:03', '1xWhopper Sandwich (6.10€)   ');
/*!40000 ALTER TABLE `purchaseorder` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
