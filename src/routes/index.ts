import express from 'express';
import { MealPlanRoutes } from '../app/modules/mealPlan/mealPlan.route';
import { TrainerRoutes } from '../app/modules/trainer/trainer.route';
import { userRoutes } from '../app/modules/user/user.route';
import { ProfileInfoRoutes } from '../app/modules/profileInfo/profileInfo.route';
import { MealRoutes } from '../app/modules/meal/meal.route';
import { SelectedMealsRoutes } from '../app/modules/selectedMeals/selectedMeals.route';
import { ReviewRoutes } from '../app/modules/review/review.route';
import { WorkoutRoutes } from '../app/modules/workout/workout.route';
import { WorkoutModuleRoutes } from '../app/modules/workoutModules/workoutModule.route';
import { EnrolledWorkoutRoutes } from '../app/modules/enrolledWorkout/enrolledWorkout.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/meal-plan',
    route: MealPlanRoutes,
  },
  {
    path: '/meal',
    route: MealRoutes,
  },
  {
    path: '/select-meal',
    route: SelectedMealsRoutes,
  },
  {
    path: '/trainer',
    route: TrainerRoutes,
  },
  {
    path: '/profile-info',
    route: ProfileInfoRoutes,
  },
  {
    path: '/review',
    route: ReviewRoutes,
  },
  {
    path: '/workout',
    route: WorkoutRoutes,
  },
  {
    path: '/workout-module',
    route: WorkoutModuleRoutes,
  },
  {
    path: '/enrolled-workout',
    route: EnrolledWorkoutRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export const routes = router;
