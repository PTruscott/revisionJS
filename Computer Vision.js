var vision = [
	{ lecture:"Intro", module:"Vision", question:"What are some main difficulties with computer vision?", answer:"Cope with imperfect images; reverse imaging process; and deal with discrete information in a continuous world." } 

,	{ lecture:"Intro", module:"Vision", question:"What are some applications of computer science?", answer:"Automated navigation; scene recognition; document processing; quality control etc.." } 

,	{ lecture:"Human Vision", module:"Vision", question:"In what wavelength is visible light?", answer:"380-760nm." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What is a photopigment?", answer:"Molecules in which light triggers a physical or chemical change as captured photons lead to a release of energy." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What are photopigments used for?", answer:"Plants use them for photosynthesis and animals use them for behvioural reaction." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What for components are in a photocell?", answer:"The connection \"wire\", the nucleus, the mitochondria, and the layers for catching photons in that order." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What are the main stages in the evolution of the eye?", answer:"Single cell, multicell, curved array of cells, pinhole camera, lenses." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What advantage does multiple cells give in relation to the eye?", answer:"Better direction perception." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What advantage of a curved array of cells give in relation to the eye?", answer:"Significantly better direction perception." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What was the disadvantage of a curved array of cells?", answer:"The light was detected in multiple places, leading to blurry images." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What advantage does the \"Pinhole camera\" give in relation to the eye?", answer:"It cuts down the light entering from different angles, focusing the image." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What was the disadvantage of the \"Pinhole camera\" in relation to the eye?", answer:"The light being cut out due to the small perture made images incredibly dim." } 

,	{ lecture:"Human Vision", module:"Vision", question:"How was the \"Dim image problem\" from \"Pinhole cameras\" fixed in relation to the eye?", answer:"Lenses evolved to take light from a wider angle and focus it." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What was the advantage of lenses in relation to the eye?", answer:"They allowed light from a wider angle be taken in and focused, allowing for brighter (and potentially sharper) images." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What are the two types of photoreceptors? ", answer:"Rods (~120 million) and cones (~6 million)." } 

,	{ lecture:"Human Vision", module:"Vision", question:"How many rod cells are there in a primate's eye?", answer:"~120 million." } 

,	{ lecture:"Human Vision", module:"Vision", question:"How many cone cells are there in a primate's eye?", answer:"~6 million." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What is the behaviour of a rod cell in an eye?", answer:"They are extremely sensitive photoreceptors that respond to a single photon." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What is a drawback of a rod cell in an eye?  Why?", answer:"They have poor spacial resolution because multiple rods converge to the same neuron within retina." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What is the behaviour of a cone cell in an eye?", answer:"They are active at high light levels (compared to cone cells), and they have much better resolution then cone cells as they are processed by serveral nuerons." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What is a the drawback of a cone cell in the eye?", answer:"As they activate at higher light levels, they give incredibly poor (if any) images in a dark environment." } 

,	{ lecture:"Human Vision", module:"Vision", question:"In a dark room would you see via primarily cone or rod cells?  Why?", answer:"Rod cells.  As they are incredibly sensitive to light, they can respond to light levels where cone cells cannot." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What is the \"Receptive Field\" in relation to eyes?", answer:"It's the area in which photons must fall for the nueron (attached to a ganglion cell) to be stimulated." } 

,	{ lecture:"Human Vision", module:"Vision", question:"Where in the \"Receptive Field\" is most sensitive in relation to eyes?", answer:"The centre, as there is a higher density of photoreceptors. " } 

,	{ lecture:"Human Vision", module:"Vision", question:"What are the two types of Ganglion cells?", answer:"Off centre and on centre." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What is an on centre Ganglion cell?", answer:"It's simulated when the centre of it's receptive field is exposed to light, and is inhibited when the surround is exposed to light." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What is an off centre Ganglion cell?", answer:"It's inhibited when the centre of it's receptive field is exposed to light, and is simulated when the surrond is exposed to light." } 

,	{ lecture:"Human Vision", module:"Vision", question:"When light is on the centre and surround of an off centre ganglion cell what is the reponse?", answer:"A weak response." } 

,	{ lecture:"Human Vision", module:"Vision", question:"When light is on the centre and surround of an on centre ganglion cell what is the response?", answer:"A weak response." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What is the advantage to two different types of Ganglion cell? ", answer:"It allows ganglion cells to transmit detail not just about whether the cells are firing, but the also about the difference in rates of cells firing in the centre and surround, allowing for information about contrast." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What is a Ganglion cell?", answer:"It is a type of nueron near the inner surface of the eye.  It recieves visual information from photoreceptors intermediate neuron types: bipolar cells and retina amacrine cells." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What is the \"Visual Pathway\" in relation to primates?", answer:"Photoreceptros -> Optic nerve -> Partial crossing of axons at the optic chiasm -> axons called optic tract -> Tract wraps around the midbrain to get to the lateral geniculate nucleus (LGN) -> LGN axons fan out through the brain -> travel to primay visual cortex at the back of the brian." } 

,	{ lecture:"Human Vision", module:"Vision", question:"How many different types of cone cells are there?", answer:"Three, to differentiate colours." } 

,	{ lecture:"Human Vision", module:"Vision", question:"What are some advantages of seeing colours?", answer:"Can distinguish different forms of objects, ripe fruit or camouflage for example. " } 

,	{ lecture:"Human Vision", module:"Vision", question:"What is the Trichroamtic theory in relation to vision?", answer:"That we have three types of cone cells, each respond to a certain hue, and any colours we see are mixings of those three hues.  Also explains colour blindness.  " } 

,	{ lecture:"Human Vision", module:"Vision", question:"What is the \"Oppent Colour\" theory in relation to vision?", answer:"Add's yellow as a primary colour over triamatric theory, and also gives oppent colours to explain why colours don't blend.  Still have three cone cells, just different ganglion cells interpert colour differently." } 

,	{ lecture:"Feature Transform", module:"Vision", question:"Why is matching features important in relation to computer vision?", answer:"Object recognition, wide baseline matching, and tracking." } 

,	{ lecture:"Feature Transform", module:"Vision", question:"What is wide baseline matching?", answer:"Given any two images, estimating the fundamental matrix anda set of matched interest points." } 

,	{ lecture:"Feature Transform", module:"Vision", question:"What is invariance?", answer:"When important features are rebust through different types of view." } 

,	{ lecture:"Feature Transform", module:"Vision", question:"What are some types of invariance?", answer:"Illumination, scale, affine, perspective change, and rotation." } 

,	{ lecture:"Feature Transform", module:"Vision", question:"How do you achieve illumination invariance?", answer:"Intensity normalisation, average out the intensity value of each pixel so the images match." } 

,	{ lecture:"Feature Transform", module:"Vision", question:"What are the two techniques to achieve scale invariance?", answer:"Pyramids, and Scale Space." } 

,	{ lecture:"Feature Transform", module:"Vision", question:"What is the \"Pyramid\" method in relation to scale invariance?", answer:"Divide width and height by 2, take average for each pixel, repeat till the image is tiny, run filter over each generated image and \"hope\" it's robust." } 

,	{ lecture:"Feature Transform", module:"Vision", question:"What is \"Scale Space (DOG)\" in relation to scale invariance?", answer:"Difference of Gausian is similiar to the Pyramid method, but it smoothes it twice with different filters.  If the feature is present in the difference between the gausian, then the feature is scale invariant." } 

,	{ lecture:"Feature Transform", module:"Vision", question:"How do you achieve rotation invariance in relation to computer vision?", answer:"Rotate all features to go the same way.  Take teh histogram of gradient directions then rotate to most dominant." } 

,	{ lecture:"Edge Detection", module:"Vision", question:"What is an intensity image?", answer:"A data matrix where each value represents intensities and each element corrosponds to one pixel." } 

,	{ lecture:"Edge Detection", module:"Vision", question:"What is an indexed image?", answer:"A data matrix and a colourmap matrix which is an m-by-3 array containing floating point values between 0-1 (rgb)." } 

,	{ lecture:"Edge Detection", module:"Vision", question:"How are intensity gradients respresented with respect to edge detection?", answer:"They are represented as a vector (normally 2d)." } 

,	{ lecture:"Edge Detection", module:"Vision", question:"What is a gradient in pixel values?", answer:"It's the rate of change from one pixel to the next in x, and one pixel to the next in y." } 

,	{ lecture:"Edge Detection", module:"Vision", question:"What is a \"Mask\" with relation to pixel values?", answer:"It's a matrix of weights in which each corresponding pixel is multiplied with the image and summed over all the pixels." } 

,	{ lecture:"Edge Detection", module:"Vision", question:"Name a 2D edge detection mask which finds the corner", answer:"Roberts.  Gx: [1, 0, 0, -1] Gy: [0, -1, 1, 0] in a 2 by 2 grid." } 

,	{ lecture:"Edge Detection", module:"Vision", question:"How does Sobel's edge detection method find the pixel value, not that of an edge or corner?", answer:"It uses a 3x3 matrix." } 

,	{ lecture:"Edge Detection", module:"Vision", question:"What is convolution in relation to edge detection?", answer:"For each pixel in an image, the new value is calculated by translating the mask to that postion (like sobel's), multiplying the mask with their repective pixel values, and taking the weighted sum for the new value in the centre." } 

,	{ lecture:"Edge Detection", module:"Vision", question:"What are the two ways to deal with edges of image when convoluting over an image?", answer:"0 padding: surronding and image with 0s for the purpose of convulting, or copying the closest pixel value for the edge. " } 

,	{ lecture:"Edge Detection", module:"Vision", question:"What are the two steps for performing edge detection of an image?", answer:"Convolve mask over the image for each direction (Gx and Gy), then calculate magnitude: sqrt(Gx^2, Gy^2)" } 

,	{ lecture:"Edge Detection", module:"Vision", question:"What is a mean filter used for?", answer:"Noise removal to get the average of nine pixels." } 

,	{ lecture:"Edge Detection", module:"Vision", question:"What is a Gaussian filtering?", answer:"It's convolving a Gaussian filter over an image for noise removal, as it weights the centre as more important.  " } 

,	{ lecture:"Edge Detection", module:"Vision", question:"How do two 1D Guassian filters work in 2D?", answer:"You can convolve the two filters over the image seperately, which gives the same result.  This is more efficient." } 

,	{ lecture:"Advanced Edge Detection", module:"Vision", question:"What does \"Edge Direction\" mean?", answer:"The direction perpendicular to the direction of maximum intensity change." } 

,	{ lecture:"Advanced Edge Detection", module:"Vision", question:"What does \"Edge Normal\" mean?", answer:"The direction of maximum intensity change." } 

,	{ lecture:"Advanced Edge Detection", module:"Vision", question:"What does \"Edge Strenth\" mean?", answer:"The local image contrast along the edge normal." } 

,	{ lecture:"Advanced Edge Detection", module:"Vision", question:"What does \"Edge Position\" mean?", answer:"The position at which the edge is located." } 

,	{ lecture:"Advanced Edge Detection", module:"Vision", question:"What are the four main steps in Edge Detection?", answer:"Smoothing (to remove noise); enhancement to sharpen the edges; thresholding to determine which edges to discard as noise; and localisation to determine the edge position." }

,	{ lecture:"Advanced Edge Detection", module:"Vision", question:"How do you detect edges using the first derivative?", answer:"You can detect the local maxima or minima of the first derivitive." }

,	{ lecture:"Advanced Edge Detection", module:"Vision", question:"How do you detect edges using the second derivative?", answer:"The edge will be at the zero crossing of the second derivitive." }

,	{ lecture:"Advanced Edge Detection", module:"Vision", question:"What is the difference between a 2D Prewitt and a 2D Sobel mask?", answer:"Sobel puts more weight to the nearest neighbour for the final value." } 

,	{ lecture:"Advanced Edge Detection", module:"Vision", question:"What are the three criteria for Optimal Edge Detection?", answer:"Good detection (No false positive or negatives); good localisation (detected edges must be close to true edges); and a single response (only one local minima/maxima per edge)." } 

,	{ lecture:"Advanced Edge Detection", module:"Vision", question:"What are the steps of Canny Edge Detection?", answer:"Smoothing with a gausian mask and then get the derivitive.  Find gradient magnitude, apply non-maxima suppression then apply hysteresis thresholding and edge linking." } 

,	{ lecture:"Advanced Edge Detection", module:"Vision", question:"What is Hysteresis thresholding?", answer:"Has a low and a high threshold, starts out marking a high threshold then follows the lines along tracing a low threshold finding fainter but still genuine lines." } 

,	{ lecture:"Advanced Edge Detection", module:"Vision", question:"What is the \"Hough\" transform?", answer:"A common approach to finding paramatised line segments." } 

,	{ lecture:"Advanced Edge Detection", module:"Vision", question:"Explain how \"Hough\" transform works to identify lines", answer:"For every pixel in the image, other pixels \"bid\" on potential lines that connect to it.  The line with the most \"bids\" is the one that is accepted." } 

,	{ lecture:"Face Recognition", module:"Vision", question:"What is an Eigenface?", answer:"A face is a weighted combination of \"base\" faces.  Base faces are known as \"Eigenfaces\"." } 

,	{ lecture:"Face Recognition", module:"Vision", question:"How are Eigenfaces generated?", answer:"Take a set of real training faces, and learn a set of base faces which best represent the difference between them." } 

,	{ lecture:"Face Recognition", module:"Vision", question:"How is each face stored in an Eigenface system?", answer:"Each face is stored as vector weight values for each Eigenface, and they can be multiplied together to get the image." } 

,	{ lecture:"Face Recognition", module:"Vision", question:"Why are Eigenfaces useful?", answer:"If a new face is compared, it's values for the Eigenfaces are calculated.  If they are similar to another face, it's probably a face of the same person." } 

,	{ lecture:"Face Recognition", module:"Vision", question:"What is Principle Components Analysis?", answer:"It's when you take a vector, caluclate the coveriance, caluclate the Eigenvectors and it tells you the spread of the data." } 

,	{ lecture:"Face Recognition", module:"Vision", question:"What is an Eigenvector?", answer:"An Eigenvector shows the dominant trend in the data." } 

,	{ lecture:"Face Recognition", module:"Vision", question:"What is an Eigenvalue?", answer:"It's the value you have to multiply your Eigenvector by to give the orignial datapoint in more dimensions." } 

,	{ lecture:"Face Recognition", module:"Vision", question:"An n by n matrix can have how many distinct Eigenvectors?", answer:"At most n." } 

,	{ lecture:"Face Recognition", module:"Vision", question:"Can an n by m matrix where n != m have an Eigenvector?", answer:"No, because only square matrices can have Eigenvectors." } 

,	{ lecture:"Face Recognition", module:"Vision", question:"What does it mean when two Eigenvectors are \"distinct\" when they are from the same matrix?", answer:"They are perpendicular (orthogonal)." } 

,	{ lecture:"Face Recognition", module:"Vision", question:"Why are two distinct Eigenvectors often used to represent points?", answer:"The less dominant one shows the deviation from the first Eigenvector." } 

,	{ lecture:"Face Recognition", module:"Vision", question:"What does Eigenfaces with bigger Eigenvalues signify?", answer:"That there will be more vaiation between the sets of faces." } 

,	{ lecture:"Face Recognition", module:"Vision", question:"How do more Eigenvectors used affect the generated face?", answer:"While a low amount will give face recognition, more Eigenvectors will give finer details." } 

];