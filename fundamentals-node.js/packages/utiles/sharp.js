const sharp = require("sharp");

//The following will reduce an image of any size to 80x80 and save it in a smaller image without deleting the original.
sharp("original.png").resize(80).grayscale().toFile("resized.png");
