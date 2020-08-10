reference documents: 
https://drive.google.com/open?id=1iBSE4jXlUqJ1g8iXcrvOWp0iNRJjnsfc

I think there will need to be four classes:
<em>LM_object</em> provides methods for creating and deleting objects and generate object at a fixed age according to the probabilistic and parameterized grammar. The axiom, the constants, the production rules and the array of random numbers are provided by the <em>reader</em> module, responsible for the analysis of the syntactic description of the object. During the generation, the module procedures directly interprets the axiom and the productions and draws the objects using the operations provided by the <em>turtle</em> module and the forces exported by the module <em>forces</em>

later i want to assign parameterized values in the geometric interpretation of strings to sliders or other elements

I'd like to use the vector force field in particle.js to animate branch objects

maybe use https://github.com/hapticdata/toxiclibsjs for physics