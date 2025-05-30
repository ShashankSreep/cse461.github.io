export function ProjectCard({Name, Description, Link}: {Name: string, Description: string, Link: string}) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700">
          <h3 className="text-lg text-white mb-2 italic">{Name}</h3>
          <p className="text-gray-400 mb-4">{Description}</p>
          <a
              href={Link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-green-500 transition-colors duration-300 text-sm font-medium"
          >
              <span>Click to view code</span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
              >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
          </a>
      </div>
    );
}
