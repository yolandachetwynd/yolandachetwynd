import { TextChange } from "typescript"

export type TeachingImage = {
    filename: string,
    title?: string,
    medium?: string, 

}

type TeachingProject = {
    collectionDescription: string[]
}

const DiAE : TeachingImage[] = [

]

const masks: TeachingImage[] = [
    { filename: 'm_bird_beak.jpg', title: "Mister Bird Beak"},
    { filename: 'm_crane.jpg', title: "Crane" },
    { filename: 'm_disgust.jpg', title: "Disgust"},
    { filename: 'm_doctor_silverface.jpg', title: "Doctor Silver Face" },
    { filename: 'm_hun_ahau.jpg', title: "Hun Ahau" },
    { filename: 'm_huscar.jpg', title: "Huscar"},
    { filename: 'm_jowls_blower.jpg', title: "Jowls Bowler" },
    { filename: 'm_master_longhorn.jpg', title: "Master Longhorn" },
    { filename: 'm_mistress_trapin_pompay-new.jpg', title: "Mistress Trapin Pompay" },
    { filename: 'm_star.jpg', title: "Star"},
    { filename: 'm_surprise.jpg', title: "Suprise"},
    { filename: 'm_unicorn.jpg', title: "Unicorn" },
    { filename: 'm_yax_balam.jpg', title: "Yax Balam" }
]


const childrenMonoprintPaintings: TeachingImage[] = [
    {filename: "mp_dove.jpg", title: "Dove", medium: "monoprints on paper"},
    {filename: "mp_heart_tree.jpg", title: "Heart Tree", medium: "monoprints on paper"},
    {filename: "mp_sharks.jpg", title: "Sharks", medium: "monoprints on paper"},
    {filename: "mp_head_dress.jpg", title: "Head dress", medium: "monoprints on paper"},
    {filename: "mp_long_neck_bird.jpg", title: "Long neck bird", medium: "monoprints on paper"},
    {filename: "mp_red_hat.jpg", title: "Red Hat", medium: "monoprints on paper"},
    {filename: "mp_fork.jpg", title: "Fork", medium: "monoprints on paper"},
    {filename: "mp_striped_legs.jpg", title: "Stripped Legs",medium: "monoprints on paper"},
    {filename: "mp_tulip.jpg", title: "Tulip", medium: "monoprints on paper"},
    {filename: "mp_tail_monster.jpg", title: "Tail Monster", medium: "monoprints on paper"},
    {filename: "mp_two_waving.jpg", title: "Two waving", medium: "monoprints on paper"},
    {filename: "mp_unicycle.jpg", title: "Unicycle", medium: "monoprints on paper"},
    {filename: "mp_tall_bird.jpg", title: "Tall Bird", medium: "monoprints on paper"},

]

const diAEDescription: TeachingProject = {
    collectionDescription: ["Yolanda recently returned from France where she spent a year learning French and developing her art. In 2017 she won the Masters fellowship in Delaware for her visual art. This is the highest honor bestowed on Delawarean artists. She has consistently exhibited her art work since 1982. Her latest solo exhibition was in the City of Nantes in France. In addition to being recognized as a distinguished artist, Yolanda has been working for DIAE for the last 28 years. She has the institutional history of the pedagogy of aesthetic education. She was selected as one of eight regional teaching artists from National Association of Aesthetic Education Institutes AIAE, associated with Lincoln Center Institute for Arts in Education, in NYC, to implement a series of national training workshops. Her role was to mentor fellow teaching artists in developing advanced understanding of the specific philosophy and educational processes developed over years of Aesthetic Education practice, which was shared among member sites of the AIAE. This work was supported by grants from the National Endowment for the Arts and others and produced a series of seven workshops, from May 2004 to August 2006. She was selected as a resource artist-in-residence by the Delaware Division of the Arts and she has worked with the Department of Education to help develop arts integrated units that combine arts study with core academic curriculum. In 2002, Yolanda was invited as a teaching art fellow for the Robert Rauschenberg workshop “The Power of Art 2002,” which was held at the National Gallery, and at the lab school, in Washington DC.",
    "She was on the Board of Directors of Delcaps the Odyssey of the mind Delaware chapter. Her two adult children went through the Delaware public school system, so she understands the needs of parents and the importance of reaching children at all levels of ability. Before settling in Newark, Delaware she worked with and lived in L’Arche communities which provide homes and workplaces where people with and without intellectual disabilities live and work together as peers in London, England and Kolkata, India. In 1989, she earned a Masters in Professional Studies in Art Therapy at the Pratt Institute, Brooklyn, NY. Over the past 26 years Yolanda as a teaching artist Yolanda has collaborated with pre-school and K-12 class room teachers on over 100 projects and worked in the classroom with students of all ages. In those projects, she designed and wrote scaffolded lesson plans for teachers.  She wants the best from and for the students of Delaware."
]
}

const masksDescription: TeachingProject = {
    collectionDescription: ["These  masks embody various archetypes found in many cultures. They were shown  in May 2006 at the Delaware Division of the Arts, Mezzanine Gallery. The masks are a natural progression of my exploration of persona, the Latin word for “to sound through” or in my case “to look through”. It has been my obsession to think about the similarities and differences of my own psyche and that of other peoples. I will go farther and say that both the paintings and the masks are about the desire to understand how other people and other cultures think, feel and live. At the same time I know that this is just my perception and may have nothing to do with their reality. The masks are an embodiment or method to try on new “personas” see how they fit and feel.",
    "I would love to have my masks be interactive. By that I mean  have people wear and try on the masks and costumes that I make."]
}

const workingWithChildrenDescription: TeachingProject = {
    collectionDescription: ["I have worked with children for years", "Monoprints inspired by my childrens' drawings"]
}

export const projects = {
    "Delaware Institute for the Arts in Education": DiAE,
    "Working with Children": childrenMonoprintPaintings, 
    "Masks": masks,
    
}

export const projectDescriptons = {
    "Delaware Institute for the Arts in Education": diAEDescription,
    "Working with Children": workingWithChildrenDescription, 
    "Masks": masksDescription
}