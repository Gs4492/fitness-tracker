import { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    CircleCheck,
} from "lucide-react";
import type { Exercise } from "../types";

interface ExerciseCardProps {
    exercise: Exercise;
    index: number;
}

export default function ExerciseCard({
    exercise,
    index,
}: ExerciseCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="card-lg">

            <button
                className="w-full text-left"
                onClick={() => setExpanded(!expanded)}
            >

                <div className="flex justify-between items-center">

                    <div>

                        <p className="text-primary text-sm">
                            Exercise {index + 1}
                        </p>

                        <h2 className="text-2xl font-bold mt-1">
                            {exercise.name}
                        </h2>

                        <p className="text-text-secondary mt-2">
                            {exercise.targets.join(" • ")}
                        </p>

                    </div>

                    {expanded ? <ChevronUp /> : <ChevronDown />}

                </div>

                <div className="flex gap-6 mt-5">

                    <div>
                        <p className="text-xs text-text-secondary">
                            Sets
                        </p>

                        <h3 className="text-xl font-bold">
                            {exercise.sets}
                        </h3>
                    </div>

                    <div>
                        <p className="text-xs text-text-secondary">
                            Reps
                        </p>

                        <h3 className="text-xl font-bold">
                            {exercise.reps}
                        </h3>
                    </div>

                    <div>
                        <p className="text-xs text-text-secondary">
                            Rest
                        </p>

                        <h3 className="text-xl font-bold">
                            {exercise.rest}s
                        </h3>
                    </div>

                </div>

            </button>

            {expanded && (

                <div className="mt-6 border-t border-gray-800 pt-5 space-y-5">

                    <div>

                        <h3 className="font-semibold text-primary">
                            Why
                        </h3>

                        <p className="mt-2 text-text-secondary">
                            {exercise.why}
                        </p>

                    </div>

                    <div>

                        <h3 className="font-semibold text-primary">
                            Correct Form
                        </h3>

                        <div className="mt-3 space-y-2">

                            {exercise.form.map((step) => (

                                <div
                                    key={step}
                                    className="flex gap-2 items-start"
                                >

                                    <CircleCheck
                                        size={18}
                                        className="text-success mt-0.5"
                                    />

                                    <p>{step}</p>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div>

                        <h3 className="font-semibold text-danger">
                            Common Mistakes
                        </h3>

                        <ul className="mt-3 list-disc list-inside text-text-secondary space-y-1">

                            {exercise.mistakes.map((mistake) => (

                                <li key={mistake}>
                                    {mistake}
                                </li>

                            ))}

                        </ul>

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div className="card">

                            <h3 className="text-success font-semibold">
                                Easier
                            </h3>

                            <p className="mt-2 text-sm">
                                {exercise.easyVariation}
                            </p>

                        </div>

                        <div className="card">

                            <h3 className="text-warning font-semibold">
                                Harder
                            </h3>

                            <p className="mt-2 text-sm">
                                {exercise.hardVariation}
                            </p>

                        </div>

                    </div>

                    <button
                        className="btn btn-primary w-full mt-6"
                    >
                        Start Exercise
                    </button>

                </div>

            )}

        </div>
    );
}