declare module "common" {
	import type {
		Batch,
		Category,
		ClassRoom,
		Department,
		Lesson,
		Post,
		PostComment,
		PostImage,
		Prisma,
		SpecialProgram,
		Student,
		Teacher,
		User,
		Year,
	} from "@prisma/client";

	type TeacherWithDetails = Teacher & {
		lesson: Lesson;
		batch: Batch;
		department: Department;
		specialProgram: SpecialProgram;
	};

	type StudentWithDetails = Student & {
		year: Year;
		classRoom: ClassRoom;
	};

	type PostWithDetails = Post & {
		category: Category;
		comments: PostComment[];
		images: PostImage[];
		_count: Prisma.PostCountOutputType;
	};

	type PostCommentWithDetails = PostComment & {
		user: User;
	};
}
