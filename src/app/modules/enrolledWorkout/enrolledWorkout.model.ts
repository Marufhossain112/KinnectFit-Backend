import { Schema } from 'mongoose';
import { model } from 'mongoose';
import { enrolledWorkoutTypes } from './enrolledWorkout.constant';
import { IEnrolledWorkout } from './enrolledWorkout.interface';

const enrolledWorkoutSchema = new Schema<IEnrolledWorkout>(
  {
    modules: [enrolledWorkoutTypes],
    total_modules: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    workout: { type: Schema.Types.ObjectId, ref: 'Workout', required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

// 3. Create a Workout  Model.
export const EnrolledWorkout = model<IEnrolledWorkout>(
  'EnrolledWorkout',
  enrolledWorkoutSchema,
);
