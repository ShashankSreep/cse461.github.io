import Navbar from './navbar';
import { motion } from 'framer-motion';
import { EduCard } from './Cards/eduCard';
import { CoreClasses } from './Cards/coreClasses';

const coreClasses = [
    {
        courseNum: 'CSE 421',
        courseDescription: 'Algorithms',
        Link: 'https://courses.cs.washington.edu/courses/cse421/',
        favorite: true,
    },
    {
        courseNum: 'CSE 451',
        courseDescription: 'Operating Systems',
        Link: 'https://courses.cs.washington.edu/courses/cse451/',
        favorite: true,
    },
    {
        courseNum: 'CSE 332',
        courseDescription: 'Data Structures and Parallelism',
        Link: 'https://courses.cs.washington.edu/courses/cse332/',
    }, 
    {
        courseNum: 'CSE 461', 
        courseDescription: 'Computer Networks',
        Link: 'https://courses.cs.washington.edu/courses/cse461/',
        favorite: true,
    },
    {
        courseNum: 'CSE 473', 
        courseDescription: 'Artificial Intelligence',
        Link: 'https://courses.cs.washington.edu/courses/cse473/',
    }, 
    {
        courseNum: 'CSE 333', 
        courseDescription: 'Systems Programming',
        Link: 'https://courses.cs.washington.edu/courses/cse333/',
        favorite: true,
    }, 
    {
        courseNum: 'CSE 344', 
        courseDescription: 'Database Management Systems',
        Link: 'https://courses.cs.washington.edu/courses/cse344/',
    }, 
    {
        courseNum: 'CSE 351', 
        courseDescription: 'Hardware/Software Interface',
        Link: 'https://courses.cs.washington.edu/courses/cse351/',
    },

];

export default function Education() {
    return (
        <div className="min-h-screen bg-gray-800 flex flex-col">
            <Navbar />
            <div className="flex-grow flex flex-wrap items-start justify-start px-10 pt-16 gap-10">
                <motion.div
                    className="max-w-md w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                    <EduCard />
                </motion.div>
                
                <motion.div
                    className="flex-grow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
                >
                    <h2 className="text-2xl text-white mb-4">Core Classes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {coreClasses.map((course, index) => (
                            <CoreClasses
                                key={index}
                                courseNum={course.courseNum}
                                courseDescription={course.courseDescription}
                                Link={course.Link}
                                favorite={course.favorite}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
