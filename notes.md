# Requirements

A client has hired you to track zoo animals.
For each animal, you must track that their name, species, and all zoos in which they have resided (including zoo name and address).

Determine the database tables necessary to track this information.

Label any relationships between table.

animals
-species ID
-zoo ID

species
-animal ID

zoos
-animal ID

zoo_animals


Relationships:

Animals (many) <===> Species (one)
Zoos(many) <===> Animals (many)


## species Table Details
-id
-species_name


## animals Table Details
-id
-animal_name
-species_id



## zoos Table Details
-id
-zoo_name
-address

## zoo_animals ( many to many )
-zoo_id
-animal_d