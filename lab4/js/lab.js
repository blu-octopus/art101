// Summary. Psuedo code for making a minesweeper
// Description. (use period)
// @link   URL
// @file   This files defines the JS file for lab 4.
// @author Daphne Cheng and Tony Aleria.
// @since  10.11.22

// Randomly generate a set number of mines on the board
//   The board is listed with array positions
// Start timer
// Mouse listening event to keep track of the (x, y) of where user clicked
//   Match (x, y) to array position
//   Change corresponding board position appearance to pressed down
// For when game status = playing
//   Reveal the tile if space is not pressed down
//     If a (x, y)’s coordinate matches with min’s position
//       Game status = over
//     If all non-mine tiles are revealed
//       Game status = over
// End page with timer and game status
